package com.whosplayin.entities;

import javax.persistence.*;

/**
 * Created by rdw1995 on 11/15/16.
 */
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue
    int id;

    @Column
    String location;

    @Column
    String vendorName;

    @Column
    String date;


    public Event() {
    }
    // @ManyToOne - multiple events per vendor
    // @ManyToOne - one per Band
    // @ManyToMany - multiple

    public Event(int id, String location, String vendorName, String date) {
        this.id = id;
        this.location = location;
        this.vendorName = vendorName;
        this.date = date;

    }

    public Event(String location, String vendorName, String date) {
        this.location = location;
        this.vendorName = vendorName;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}
