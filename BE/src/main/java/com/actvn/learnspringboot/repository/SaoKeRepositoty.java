package com.actvn.learnspringboot.repository;

import com.actvn.learnspringboot.entity.SaoKeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SaoKeRepositoty extends JpaRepository<SaoKeEntity, Integer> {
    @Query("SELECT s FROM bidv s WHERE " +
            "(LOWER(s.description) LIKE LOWER(CONCAT('%', :search, '%')) OR :search IS NULL) " +
            "AND (s.date >= :startdate) " +
            "AND (s.date <= :enddate) " +
            "AND (" +
            "(:from IS NULL AND :to IS NULL) OR " +
            "(:to IS NULL AND CAST(REPLACE(s.money, ',', '') AS LONG) >= :from) OR " +
            "(CAST(REPLACE(s.money, ',', '') AS LONG) BETWEEN :from AND :to)" + ")" +
            "ORDER BY " +
            "CASE WHEN :follow = 'date' THEN s.date END ASC, " +
            "CASE WHEN :follow = 'money' THEN CAST(REPLACE(s.money, ',', '') AS LONG) END ASC"

            )
    List<SaoKeEntity> findBySearch(@Param("search") String search,
                                   @Param("startdate") LocalDate startdate,
                                   @Param("enddate") LocalDate enddate,
                                   @Param("follow") String follow,
                                   @Param("from") Integer from,
                                   @Param("to") Integer to
                                   );
}
