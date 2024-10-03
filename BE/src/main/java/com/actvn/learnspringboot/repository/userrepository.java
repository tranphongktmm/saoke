package com.actvn.learnspringboot.repository;

import com.actvn.learnspringboot.entity.userentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userrepository extends JpaRepository<userentity, String> {

}
