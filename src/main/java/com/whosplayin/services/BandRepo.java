package com.whosplayin.services;

import com.whosplayin.entities.Band;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by rdw1995 on 11/15/16.
 */
public interface BandRepo extends CrudRepository<Band, Integer> {
}
