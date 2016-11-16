package com.whosplayin.services;

import com.whosplayin.entities.Venue;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.criteria.CriteriaBuilder;

/**
 * Created by rdw1995 on 11/16/16.
 */
public interface VenueRepo extends CrudRepository<Venue, Integer> {
}
