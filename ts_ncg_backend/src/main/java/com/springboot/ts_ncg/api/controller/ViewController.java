package com.springboot.ts_ncg.api.controller;

import com.springboot.ts_ncg.api.model.View;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/view")
public class ViewController {

    private final ViewRepository viewRepository;
    
    @Autowired
    public ViewController(ViewRepository viewRepository) {
    	this.viewRepository = viewRepository;
    }
    
    @PostMapping
    public ResponseEntity<View> createView(@RequestBody View view) throws URISyntaxException {
    	View savedView = viewRepository.save(view);
    	return ResponseEntity.created(new URI("/view"+savedView.getId())).body(savedView);
    }
    
    @GetMapping
    public List<View> getViews(){
    	return viewRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public View getView(@PathVariable Long id){
    	return viewRepository.findById(id).orElseThrow(RuntimeException::new);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable Long id) {
        viewRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
