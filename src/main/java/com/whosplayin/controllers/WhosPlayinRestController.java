package com.whosplayin.controllers;

import com.whosplayin.entities.User;
import com.whosplayin.services.BandRepo;
import com.whosplayin.services.EventRepo;
import com.whosplayin.services.UserRepo;
import com.whosplayin.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.sql.SQLException;

/**
 * Created by rdw1995 on 11/15/16.
 */
@RestController
public class WhosPlayinRestController {

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
//        String username, String password, String firstName, String lastName
        if (users.count() == 0){
            User user = new User("teambekbek", PasswordStorage.createHash("iwantMusic2"), "Rebekah", "Whittle");
            users.save(user);
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }


}
