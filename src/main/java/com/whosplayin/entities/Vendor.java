package com.whosplayin.entities;

import javax.persistence.*;

/**
 * Created by rdw1995 on 11/16/16.
 */
@Entity
@Table(name = "vendors")
public class Vendor {
    @Id
    @GeneratedValue
    int id;

    @Column
    String vendorName;

    @Column
    String vendorAddress;

    @Column
    String VendorPhone;

    @Column
    String vendorWebsite;

    public Vendor() {
    }

    public Vendor(int id, String vendorName, String vendorAddress, String vendorPhone, String vendorWebsite) {
        this.id = id;
        this.vendorName = vendorName;
        this.vendorAddress = vendorAddress;
        VendorPhone = vendorPhone;
        this.vendorWebsite = vendorWebsite;
    }

    public Vendor(String vendorName, String vendorAddress, String vendorPhone, String vendorWebsite) {
        this.vendorName = vendorName;
        this.vendorAddress = vendorAddress;
        VendorPhone = vendorPhone;
        this.vendorWebsite = vendorWebsite;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public String getVendorAddress() {
        return vendorAddress;
    }

    public void setVendorAddress(String vendorAddress) {
        this.vendorAddress = vendorAddress;
    }

    public String getVendorPhone() {
        return VendorPhone;
    }

    public void setVendorPhone(String vendorPhone) {
        VendorPhone = vendorPhone;
    }

    public String getVendorWebsite() {
        return vendorWebsite;
    }

    public void setVendorWebsite(String vendorWebsite) {
        this.vendorWebsite = vendorWebsite;
    }
}
