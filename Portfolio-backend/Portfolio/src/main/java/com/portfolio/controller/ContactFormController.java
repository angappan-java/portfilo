package com.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.entity.ContactForm;
import com.portfolio.repository.ContactRepository;
import com.portfolio.service.JavaMailService;

@RestController
@CrossOrigin(origins={"http://127.0.0.1:5500","http://localhost:5500"})
public class ContactFormController {
	
	@Autowired
	private JavaMailService mailservice;
	@Autowired
	private ContactRepository contactrepo;
	
	@PostMapping("/portfolio/contactform")
	public ResponseEntity<?> contactForm(@RequestBody ContactForm contact){
		try {
			mailservice.sendContact(contact.getName(),contact.getEmail(),contact.getSubject(),contact.getMessage());
			
			contactrepo.save(contact);
			return ResponseEntity.ok("Message Send SuccessFully...");
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}

}
