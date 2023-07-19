package com.springboot.ts_ncg.api.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.ts_ncg.api.model.View;

public interface ViewRepository extends JpaRepository<View, Long> {

}
