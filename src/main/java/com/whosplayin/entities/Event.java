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

    @Column
    String vendorAddress;

    @Column
    String vendorPhone;

    @Column
    String vendorWebsite;

    public Event() {
    }

    public Event(int id, String location, String vendorName, String date, String vendorAddress, String vendorPhone, String vendorWebsite) {
        this.id = id;
        this.location = location;
        this.vendorName = vendorName;
        this.date = date;
        this.vendorAddress = vendorAddress;
        this.vendorPhone = vendorPhone;
        this.vendorWebsite = vendorWebsite;
    }

    public Event(String location, String vendorName, String date, String vendorAddress, String vendorPhone, String vendorWebsite) {
        this.location = location;
        this.vendorName = vendorName;
        this.date = date;
        this.vendorAddress = vendorAddress;
        this.vendorPhone = vendorPhone;
        this.vendorWebsite = vendorWebsite;
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

    public String getVendorAddress() {
        return vendorAddress;
    }

    public void setVendorAddress(String vendorAddress) {
        this.vendorAddress = vendorAddress;
    }

    public String getVendorPhone() {
        return vendorPhone;
    }

    public void setVendorPhone(String vendorPhone) {
        this.vendorPhone = vendorPhone;
    }

    public String getVendorWebsite() {
        return vendorWebsite;
    }

    public void setVendorWebsite(String vendorWebsite) {
        this.vendorWebsite = vendorWebsite;
    }
}
