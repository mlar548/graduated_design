package com.gys.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class CreateId {

	
	public   String createId() {
		Date date =new Date();
		SimpleDateFormat formatt= new SimpleDateFormat("yyyyMMddHHmmss") ;
		String time = formatt.format(date);
		 
		Random ra =new Random();
	 
		String id=time+ra.nextInt(10)+ra.nextInt(10);
		 return id;
	}
}
