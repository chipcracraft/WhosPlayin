package com.whosplayin.entities;

import javax.persistence.*;

/**
 * Created by rdw1995 on 11/15/16.
 */
@Entity
@Table(name = "bands")
public class Band {
    @Id
    @GeneratedValue
    int id;

    @Column
    String bandLocation;

    @Column
    String bandName;

    @Column
    String bandGenre;

    @Column
    String bandTour;

    @Column
    String bandMembers;

    public Band() {
    }

    public Band(int id, String bandLocation, String bandName, String bandGenre, String bandTour, String bandMembers) {
        this.id = id;
        this.bandLocation = bandLocation;
        this.bandName = bandName;
        this.bandGenre = bandGenre;
        this.bandTour = bandTour;
        this.bandMembers = bandMembers;
    }

    public Band(String bandLocation, String bandName, String bandGenre, String bandTour, String bandMembers) {
        this.bandLocation = bandLocation;
        this.bandName = bandName;
        this.bandGenre = bandGenre;
        this.bandTour = bandTour;
        this.bandMembers = bandMembers;
    }

    public int getId() {
        return id;
    }

    // @ManytoMany -- multiple events for each User & Event

    public void setId(int id) {
        this.id = id;
    }

    public String getBandLocation() {
        return bandLocation;
    }

    public void setBandLocation(String bandLocation) {
        this.bandLocation = bandLocation;
    }

    public String getBandName() {
        return bandName;
    }

    public void setBandName(String bandName) {
        this.bandName = bandName;
    }

    public String getBandGenre() {
        return bandGenre;
    }

    public void setBandGenre(String bandGenre) {
        this.bandGenre = bandGenre;
    }

    public String getBandTour() {
        return bandTour;
    }

    public void setBandTour(String bandTour) {
        this.bandTour = bandTour;
    }

    public String getBandMembers() {
        return bandMembers;
    }

    public void setBandMembers(String bandMembers) {
        this.bandMembers = bandMembers;
    }
}
