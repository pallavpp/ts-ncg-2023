package com.springboot.ts_ncg.service;

import com.springboot.ts_ncg.api.model.View;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class ViewService {
	
	private List<View> viewList;
	
	public ViewService() {
		viewList = new ArrayList<>();
	}
	
//	public View getView(Integer id) {
//		for(View view : viewList) {
//			if(id == view.getId()) {
//				return view;
//			}
//		}
//	}
}
