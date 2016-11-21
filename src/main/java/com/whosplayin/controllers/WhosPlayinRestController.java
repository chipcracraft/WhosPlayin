package com.whosplayin.controllers;

import com.whosplayin.entities.Band;
import com.whosplayin.entities.User;
import com.whosplayin.services.BandRepo;
import com.whosplayin.services.EventRepo;
import com.whosplayin.services.UserRepo;
import com.whosplayin.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import sun.security.util.Password;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;

/**
 * Created by rdw1995 on 11/15/16.
 */

@RestController
public class WhosPlayinRestController {

//    public final String API_KEY = "YlX4r2ab8xzzlYDB";

    @Autowired
    BandRepo bands;

    @Autowired
    EventRepo events;

    @Autowired
    UserRepo users;

    Server h2;

    @PostConstruct
    public void init() throws SQLException, PasswordStorage.CannotPerformOperationException {
        h2 = Server.createWebServer().start();
    // String username, String password, String firstName, String lastName
        if (users.count() == 0){
            User user = new User("teambekbek", PasswordStorage.createHash("iwantMusic2"), "Rebekah", "Whittle");
            users.save(user);
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }



    // sign-up for a WhosPlayin account

    @RequestMapping(path = "/sign-up", method = RequestMethod.POST)
    public ResponseEntity<User> addUser (HttpSession session, @RequestBody User user) throws PasswordStorage.CannotPerformOperationException, PasswordStorage.InvalidHashException {
        User validUsername = users.findFirstByUsername(user.getUsername());
        if (validUsername == null){
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), validUsername.getPassword())){
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }
        session.setAttribute("username", user.getUsername());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    // sign-in for WhosPlayin account

    @RequestMapping(path = "/sign-in", method = RequestMethod.POST)
    public void signIn (HttpSession session, @RequestBody User user) throws Exception {
        User randomUser = users.findFirstByUsername(user.getUsername());
        if(randomUser == null){
            throw new Exception("Username doesn't exist! Please Sign-Up!");
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), randomUser.getPassword())){
            throw new Exception("Oops - incorrect password! Try again!");
        }
        session.setAttribute("username", user.getUsername());
    }

    // sign-out of WhosPlayin account

    @RequestMapping(path = "/sign-out", method = RequestMethod.POST)
    public void signOut(HttpSession session){
        session.invalidate();
    }

    // displays the signed- (in) user for WhosPlayin

    @RequestMapping("/get-account")
    public User getUser(HttpSession session) throws Exception {
        String username = (String) session.getAttribute("username");
        User inUser = users.findFirstByUsername(username);
        if (inUser == null) {
            throw new Exception("Oops! Either you're not signed-in or you need to sign-up!");
        }
        return inUser;
    }


    // edit or update account information for WhosPlayin

    @RequestMapping(path = "/edit-account", method = RequestMethod.POST)
    public void editAccount (HttpSession session, @RequestBody User user) throws Exception {
        String username = (String) session.getAttribute("username");
        User validUser = users.findFirstByUsername(username);
        if (validUser == null && validUser.getId() != user.getId()){
            throw new Exception("Oops! It looks like you're not signed-in!");
        }
        validUser.setUsername(user.getUsername());
        validUser.setPassword(user.getPassword());
        // PasswordStorage.verifyPassword(^username.getPassword())
        validUser.setCity(user.getCity());
        validUser.setEmail(user.getCity());
        validUser.setFirstName(user.getFirstName());
        validUser.setLastName(user.getLastName());
        validUser.setPhone(user.getPhone());

        users.save(validUser);
    }

    // delete WhosPlayin account

    @RequestMapping(path = "/delete-account", method = RequestMethod.POST)
    public void deleteAccount (HttpSession session, @RequestBody User user) throws Exception {
        String username = (String) session.getAttribute("username");
        User validUser = users.findFirstByUsername(username);
        if(!PasswordStorage.verifyPassword(user.getPassword(), validUser.getPassword())){
            throw new Exception("Sesame cannot open - please try again!");
        }
        users.delete(validUser);
    }

    // REQUEST LOCATION

//    @RequestMapping(path = "/")



}
