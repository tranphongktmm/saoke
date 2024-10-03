package com.actvn.learnspringboot.service;

import com.actvn.learnspringboot.dto.requests.SaoKeRequest;
import com.actvn.learnspringboot.entity.SaoKeEntity;
import com.actvn.learnspringboot.repository.SaoKeRepositoty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
public class SaoKeService {
    @Autowired
    private SaoKeRepositoty saoKeRepositoty;

    public SaoKeEntity create(SaoKeRequest request){
        SaoKeEntity saoKe = new SaoKeEntity();

        saoKe.setId(request.getId());
        saoKe.setDate(request.getDate());
        saoKe.setMoney(request.getMoney());
        saoKe.setDescription(request.getDescription());

        return saoKeRepositoty.save(saoKe);
    }

    public List<SaoKeEntity> getListSaoKe(){
        return saoKeRepositoty.findAll();
    }

    public SaoKeEntity getSaoKe (int id) {
        return saoKeRepositoty.findById(id).orElseThrow(() -> new RuntimeException("not found"));
    }

    public SaoKeEntity updateSaoKe(int id, @RequestBody SaoKeRequest request){
        SaoKeEntity saoKe = getSaoKe(id);

        saoKe.setDate(request.getDate());
        saoKe.setMoney(request.getMoney());
        saoKe.setDescription(request.getDescription());

        return saoKeRepositoty.save(saoKe);
    }

    public void deleteSaoKe(int id){
        saoKeRepositoty.deleteById(id);
    }

    public List<SaoKeEntity> getSaoKeParam(String search, LocalDate startdate, LocalDate enddate,String follow,String money,String bank){
        if(startdate==null){
            startdate = LocalDate.of(1999, 1, 1);
        }
        if(enddate==null){
            enddate = LocalDate.of(9999, 12, 31);
        }
        if(Objects.equals(follow, "Ngày")){
            follow="date";
        }

        if(Objects.equals(follow, "Số tiền")){
            follow="money";
        }

        //
//        if(Objects.equals(sort, "Giảm dần")){
//            sort="DESC";
//        }
//        if(Objects.equals(sort, "Tăng dần")){
//            sort="ASC";
//        }

        Integer from = null;
        Integer to = null;
        if(Objects.equals(money, "Tất cả số tiền VND") || money==null){

        }else if (Objects.equals(money, "Trên 50,000,000 VND")){
            from = 50000000;
        }else{
            try {
                String[] a = money.split(" ");
                from = Integer.parseInt(a[0].replace(",", ""));
                to = Integer.parseInt(a[2].replace(",", ""));
            } catch (NumberFormatException e) {
                // Xử lý lỗi khi chuỗi money không hợp lệ
                System.out.println("Giá trị không hợp lệ trong khoảng tiền: " + money);
            }
        }

        System.out.println(from);
        System.out.println(to);

        return saoKeRepositoty.findBySearch(search,startdate,enddate,follow,from,to);
    }
}
