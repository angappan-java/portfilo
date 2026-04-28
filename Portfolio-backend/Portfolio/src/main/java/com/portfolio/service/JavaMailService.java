package com.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class JavaMailService {
	
	@Autowired
	private JavaMailSender mailsender;
	
	public void sendContact(String name,String Email,String subject,String message) {
		
		SimpleMailMessage mail=new SimpleMailMessage();
		
		mail.setFrom(Email);
		
		mail.setTo("angappan2399@gmail.com");
		
		mail.setSubject(subject);
		
		String text="Name :"+name+"\n Messgae :"+message;
		
		mail.setText(text);
		
		mail.setReplyTo(Email);
		
		mailsender.send(mail);
	}

}
