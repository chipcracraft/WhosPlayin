package com.whosplayin.services;

import com.whosplayin.entities.Event;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by rdw1995 on 11/15/16.
 */
public interface EventRepo extends CrudRepository<Event, Integer> {
}
