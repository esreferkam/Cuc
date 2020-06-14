package com.cybertek.library.pages;

import java.util.*;

public class Java {
    public static void main(String[] args) {
        String str = "AAABSBSBSBDJD";
        Map<String, Integer> all = new HashMap<>();
//        for(char each : str.toCharArray()){
//            if(!all.containsKey(each)){
//                all.put(each, 1);
//            }else{
//                all.put(each, all.get(each) + 1);
//            }
//    }
        System.out.println(all);
        List<String> strList = new ArrayList<>();
        strList = Arrays.asList(str.split(""));

        for(String each : strList){
            if(!all.containsKey(each)){
               all.put(each, 1);
            }else{
                all.put(each, all.get(each) + 1);
            }
        }
        System.out.println(all);
    }

}
