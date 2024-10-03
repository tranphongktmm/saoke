package com.actvn.learnspringboot.dto.responses;

public class helloworldresponses {

    private String message;

    public helloworldresponses(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
