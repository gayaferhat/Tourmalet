package com.revision.ventoux;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InformationsController {
    @GetMapping("api")
    private Information getAppInformations(){
        return Information.builder()
                .name("Tourmalet")
                .version("1.0.1")
                .build();
    }

}
