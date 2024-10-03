package com.actvn.learnspringboot.dto.requests;

public class helloworldrequests {
    private String data;

    public helloworldrequests(String data) {
        this.data = data;
    }

    public helloworldrequests() {
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
