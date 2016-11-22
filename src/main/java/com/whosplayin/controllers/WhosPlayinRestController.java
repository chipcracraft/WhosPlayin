package com.whosplayin.controllers;

import com.whosplayin.entities.User;
import com.whosplayin.services.BandRepo;
import com.whosplayin.services.EventRepo;
import com.whosplayin.services.UserRepo;
import com.whosplayin.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

/**
 * Created by rdw1995 on 11/15/16.
 */

@RestController
public class WhosPlayinRestController {

    // {latitude: 32.7799225, longitude: -79.9343825}

    public final String API_KEY = "YlX4r2ab8xzzlYDB";
//    public final String LOCATION = "Charleston,SC";

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
    public User signIn (HttpSession session, @RequestBody User user) throws Exception {
        User aUser = users.findFirstByUsername(user.getUsername());
        if(aUser == null){
            throw new Exception("Username doesn't exist! Please Sign-Up!");
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), aUser.getPassword())){
            throw new Exception("Oops - incorrect password! Try again!");
        }
        session.setAttribute("username", user.getUsername());

        return aUser;
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

    @RequestMapping(path = "/{location}", method = RequestMethod.GET)
    public HashMap getLocation(@PathVariable("location") String location) {
        String request = "http://api.songkick.com/api/3.0/search/locations.json?";

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(request)
                .queryParam("query", location)
                .queryParam("apikey", API_KEY);

        RestTemplate query = new RestTemplate();
        HashMap search = query.getForObject(builder.build().encode().toUri(), HashMap.class);
        HashMap resultsPage = (HashMap) search.get("resultsPage");
        return resultsPage;
    }
//
    @RequestMapping(path = "/events-calendar/{areaId}", method = RequestMethod.GET)
    public HashMap getEvents(@PathVariable("areaId") int areaId){

        String request = "http://api.songkick.com/api/3.0/metro_areas/" + areaId + "/calendar.json";

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(request)
                .queryParam("apikey", API_KEY);

        RestTemplate query = new RestTemplate();
        HashMap search = query.getForObject(builder.build().encode().toUri(), HashMap.class);
        HashMap resultsPage = (HashMap) search.get("resultsPage");

        return resultsPage;
    }
}
