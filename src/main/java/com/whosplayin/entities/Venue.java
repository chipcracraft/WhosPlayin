package com.whosplayin.entities;

import javax.persistence.*;

/**
 * Created by rdw1995 on 11/16/16.
 */
@Entity
@Table(name = "venues")
public class Venue {
    @Id
    @GeneratedValue
    int id;

    @Column
    String venueName;

    @Column
    String venueAddress;

    @Column
    String venuePhone;

    @Column
    String venueWebsite;

    public Venue() {
    }

    public Venue(int id, String venueName, String venueAddress, String venuePhone, String venueWebsite) {
        this.id = id;
        this.venueName = venueName;
        this.venueAddress = venueAddress;
        this.venuePhone = venuePhone;
        this.venueWebsite = venueWebsite;
    }

    public Venue(String venueName, String venueAddress, String venuePhone, String venueWebsite) {
        this.venueName = venueName;
        this.venueAddress = venueAddress;
        this.venuePhone = venuePhone;
        this.venueWebsite = venueWebsite;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }

    public String getVenueAddress() {
        return venueAddress;
    }

    public void setVenueAddress(String venueAddress) {
        this.venueAddress = venueAddress;
    }

    public String getVenuePhone() {
        return venuePhone;
    }

    public void setVenuePhone(String venuePhone) {
        this.venuePhone = venuePhone;
    }

    public String getVenueWebsite() {
        return venueWebsite;
    }

    public void setVenueWebsite(String venueWebsite) {
        this.venueWebsite = venueWebsite;
    }
}
