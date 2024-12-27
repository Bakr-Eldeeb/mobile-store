import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

   mobilePhones = [
    { 
      id: 1, 
      brand: "Apple", 
      name: "iPhone 15 Pro", 
      year: 2023, 
        processor: "Apple A17 Bionic", 
        display: "6.1-inch Super Retina XDR OLED", 
        camera: "48 MP + 12 MP", 
        battery: "3279 mAh" ,
      price: "$1299", 
      picture: "../assets/images/1.jpg" 
    },
    { 
      id: 2, 
      brand: "Samsung", 
      name: "Galaxy S23 Ultra", 
      year: 2023, 
       
        processor: "Qualcomm Snapdragon 8 Gen 2", 
        display: "6.8-inch Dynamic AMOLED 2X", 
        camera: "200 MP + 10 MP + 12 MP", 
        battery: "5000 mAh", 
       
      price: "$1199", 
      picture: "../assets/images/2.jpg" 
    },
    { 
      id: 3, 
      brand: "Oppo", 
      name: "Find X5 Pro", 
      year: 2022, 
      
        processor: "Qualcomm Snapdragon 8 Gen 1", 
        display: "6.7-inch LTPO2 AMOLED", 
        camera: "50 MP + 50 MP + 13 MP", 
        battery: "5000 mAh", 
       
      price: "$1099", 
      picture: "../assets/images/3.jpg" 
    },
    { 
      id: 4, 
      brand: "Apple", 
      name: "iPhone 14 Pro", 
      year: 2022, 
      
        processor: "Apple A16 Bionic", 
        display: "6.1-inch Super Retina XDR OLED", 
        camera: "48 MP + 12 MP", 
        battery: "3200 mAh", 
       
      price: "$1049", 
      picture: "../assets/images/4.jpg" 
    },
    { 
      id: 5, 
      brand: "Samsung", 
      name: "Galaxy Z Fold 4", 
      year: 2022, 
      
        processor: "Qualcomm Snapdragon 8+ Gen 1", 
        display: "7.6-inch Foldable Dynamic AMOLED 2X", 
        camera: "50 MP + 12 MP + 10 MP", 
        battery: "4400 mAh", 
       
      price: "$1799", 
      picture: "../assets/images/5.jpg" 
    },
    { 
      id: 6, 
      brand: "Oppo", 
      name: "Reno 8 Pro", 
      year: 2022, 
      
        processor: "MediaTek Dimensity 8100", 
        display: "6.7-inch AMOLED", 
        camera: "50 MP + 8 MP + 2 MP", 
        battery: "4500 mAh", 
       
      price: "$580", 
      picture: "../assets/images/6.jpg" 
    },
    { 
      id: 7, 
      brand: "Apple", 
      name: "iPhone 13 Pro", 
      year: 2021, 
      
        processor: "Apple A15 Bionic", 
        display: "6.1-inch Super Retina XDR OLED", 
        camera: "12 MP + 12 MP + 12 MP", 
        battery: "3095 mAh", 
       
      price: "$899", 
      picture: "../assets/images/7.jpg" 
    },
    { 
      id: 8, 
      brand: "Samsung", 
      name: "Galaxy S22 Ultra", 
      year: 2022, 
      
        processor: "Qualcomm Snapdragon 8 Gen 1", 
        display: "6.8-inch Dynamic AMOLED 2X", 
        camera: "108 MP + 10 MP + 12 MP", 
        battery: "5000 mAh", 
       
      price: "$1049", 
      picture: "../assets/images/8.jpg" 
    },
    { 
      id: 9, 
      brand: "Oppo", 
      name: "Reno 7 5G", 
      year: 2021, 
      
        processor: "Qualcomm Snapdragon 778G", 
        display: "6.43-inch AMOLED", 
        camera: "64 MP + 8 MP + 2 MP", 
        battery: "4500 mAh", 
       
      price: "$400", 
      picture: "../assets/images/9.jpg" 
    },
    { 
      id: 10, 
      brand: "Apple", 
      name: "iPhone 12", 
      year: 2020, 
      
        processor: "Apple A14 Bionic", 
        display: "6.1-inch Super Retina XDR OLED", 
        camera: "12 MP + 12 MP", 
        battery: "2815 mAh", 
       
      price: "$749", 
      picture: "../assets/images/10.jpg" 
    },
    { 
      id: 11, 
      brand: "Samsung", 
      name: "Galaxy A53 5G", 
      year: 2022, 
      
        processor: "Exynos 1280", 
        display: "6.5-inch Super AMOLED", 
        camera: "64 MP + 12 MP + 5 MP", 
        battery: "5000 mAh", 
       
      price: "$449", 
      picture: "../assets/images/11.jpg" 
    },
    { 
      id: 12, 
      brand: "Oppo", 
      name: "A94 5G", 
      year: 2021, 
      
        processor: "MediaTek Dimensity 800U", 
        display: "6.43-inch AMOLED", 
        camera: "48 MP + 8 MP + 2 MP", 
        battery: "4310 mAh", 
       
      price: "$300", 
      picture: "../assets/images/12.jpg" 
    },
    { 
      id: 13, 
      brand: "Apple", 
      name: "iPhone 11", 
      year: 2019, 
      
        processor: "Apple A13 Bionic", 
        display: "6.1-inch Liquid Retina HD", 
        camera: "12 MP + 12 MP", 
        battery: "3110 mAh", 
       
      price: "$599", 
      picture: "../assets/images/13.jpg" 
    },
    { 
      id: 14, 
      brand: "Samsung", 
      name: "Galaxy Note 20 Ultra", 
      year: 2020, 
      
        processor: "Qualcomm Snapdragon 865+",
        display: "6.9-inch Dynamic AMOLED 2X", 
        camera: "108 MP + 12 MP + 12 MP", 
        battery: "4500 mAh",
       
      price: "$1299", 
      picture: "../assets/images/14.jpg" 
    },
    { 
      id: 15, 
      brand: "Oppo", 
      name: "Oppo F19 Pro+", 
      year: 2021, 
      
        processor: "MediaTek Dimensity 800U", 
        display: "6.43-inch Super AMOLED", 
        camera: "48 MP + 8 MP + 2 MP", 
        battery: "4310 mAh", 
       
      price: "$330", 
      picture: "../assets/images/15.jpg" 
    },
    { 
      id: 16, 
      brand: "Apple", 
      name: "iPhone SE (2022)", 
      year: 2022, 
      
        processor: "Apple A15 Bionic", 
        display: "4.7-inch Retina HD", 
        camera: "12 MP", 
        battery: "2018 mAh", 
       
      price: "$299", 
      picture: "../assets/images/16.jpg" 
    },
    { 
      id: 17, 
      brand: "Samsung", 
      name: "Galaxy A73 5G", 
      year: 2022, 
      
        processor: "Qualcomm Snapdragon 778G", 
        display: "6.7-inch Super AMOLED Plus", 
        camera: "108 MP + 12 MP + 5 MP", 
        battery: "5000 mAh", 
       
      price: "$499", 
      picture: "../assets/images/17.jpg" 
    },
    { 
      id: 18, 
      brand: "Oppo", 
      name: "Oppo A54", 
      year: 2021, 
      
        processor: "MediaTek Helio P35", 
        display: "6.51-inch IPS LCD", 
        camera: "13 MP + 2 MP + 2 MP", 
        battery: "5000 mAh", 
       
      price: "$159", 
      picture: "../assets/images/18.jpg" 
    },
    { 
      id: 19, 
      brand: "Apple", 
      name: "iPhone XR", 
      year: 2018, 
      
        processor: "Apple A12 Bionic", 
        display: "6.1-inch Liquid Retina HD", 
        camera: "12 MP", 
        battery: "2942 mAh", 
       
      price: "$499", 
      picture: "../assets/images/19.jpg" 
    },
    { 
      id: 20, 
      brand: "Samsung", 
      name: "Galaxy S21 FE", 
      year: 2022, 
      
        processor: "Exynos 2100", 
        display: "6.4-inch Dynamic AMOLED 2X", 
        camera: "12 MP + 12 MP + 8 MP", 
        battery: "4500 mAh", 
       
      price: "$699", 
      picture: "../assets/images/20.jpg" 
    },
    { 
      id: 21, 
      brand: "Oppo", 
      name: "A31", 
      year: 2020, 
      
        processor: "MediaTek Helio P35", 
        display: "6.5-inch IPS LCD", 
        camera: "12 MP + 2 MP + 2 MP", 
        battery: "4230 mAh", 
       
      price: "$180", 
      picture: "../assets/images/21.jpg" 
    },
    { 
      id: 22, 
      brand: "Apple", 
      name: "iPhone 8", 
      year: 2017, 
      
        processor: "Apple A11 Bionic", 
        display: "4.7-inch Retina HD", 
        camera: "12 MP", 
        battery: "1821 mAh", 
       
      price: "$359", 
      picture: "../assets/images/22.jpg" 
    },
    { 
      id: 23, 
      brand: "Samsung", 
      name: "Galaxy A32", 
      year: 2021, 
      
        processor: "MediaTek Helio G80", 
        display: "6.4-inch Super AMOLED", 
        camera: "64 MP + 8 MP + 5 MP", 
        battery: "5000 mAh", 
       
      price: "$299", 
      picture: "../assets/images/23.jpg" 
    },
    { 
      id: 24, 
      brand: "Oppo", 
      name: "Oppo F17 Pro", 
      year: 2020, 
      
        processor: "MediaTek Helio P95", 
        display: "6.43-inch AMOLED", 
        camera: "48 MP + 8 MP + 2 MP", 
        battery: "4015 mAh", 
       
      price: "$250", 
      picture: "../assets/images/24.jpg" 
    },
    { 
      id: 25, 
      brand: "Apple", 
      name: "iPhone 7", 
      year: 2016, 
      
        processor: "Apple A10 Fusion", 
        display: "4.7-inch Retina HD", 
        camera: "12 MP", 
        battery: "1960 mAh", 
       
      price: "$199", 
      picture: "../assets/images/25.jpg" 
    },
    { 
      id: 26, 
      brand: "Samsung", 
      name: "Galaxy M32", 
      year: 2021, 
      
        processor: "MediaTek Helio G80", 
        display: "6.4-inch Super AMOLED", 
        camera: "64 MP + 8 MP + 2 MP", 
        battery: "6000 mAh", 
       
      price: "$250", 
      picture: "../assets/images/26.jpg" 
    },
    { 
      id: 27, 
      brand: "Oppo", 
      name: "Oppo A15", 
      year: 2020, 
      
        processor: "MediaTek Helio P35", 
        display: "6.52-inch IPS LCD", 
        camera: "13 MP + 2 MP + 2 MP", 
        battery: "4230 mAh", 
       
      price: "$150", 
      picture: "../assets/images/27.jpg" 
    },
    { 
      id: 28, 
      brand: "Apple", 
      name: "iPhone 6s", 
      year: 2015, 
      
        processor: "Apple A9", 
        display: "4.7-inch Retina HD", 
        camera: "12 MP", 
        battery: "1715 mAh", 
       
      price: "$9", 
      picture: "../assets/images/28.jpg" 
    },
    { 
      id: 29, 
      brand: "Samsung", 
      name: "Galaxy S10", 
      year: 2019, 
      
        processor: "Qualcomm Snapdragon 855", 
        display: "6.1-inch Dynamic AMOLED", 
        camera: "12 MP + 12 MP + 16 MP", 
        battery: "3400 mAh", 
       
      price: "$699", 
      picture: "../assets/images/29.jpg" 
    },
    { 
      id: 30, 
      brand: "Oppo", 
      name: "Oppo F19", 
      year: 2021, 
      
        processor: "Qualcomm Snapdragon 662", 
        display: "6.43-inch AMOLED", 
        camera: "48 MP + 2 MP + 2 MP", 
        battery: "5000 mAh", 
       
      price: "$220", 
      picture: "../assets/images/30.jpg" 
    },
    {
      id: 31,
      brand: "Apple",
      name: "MacBook Air M2",
      year: 2022,
      processor: "Apple M2 Chip",
      display: "13.6-inch Liquid Retina",
      camera: "1080p FaceTime HD",
      battery: "Up to 18 hours",
      price: "$1499",
      picture: "../assets/images/31.jpeg",
    },
    {
      id: 32,
      brand: "Samsung",
      name: "Galaxy Book3 Ultra",
      year: 2023,
      processor: "Intel Core i9 13th Gen",
      display: "16-inch AMOLED 3K",
      camera: "1080p",
      battery: "76Wh",
      price: "$2499",
      picture: "../assets/images/32.jpeg",
    },
    {
      id: 33,
      brand: "Apple",
      name: "MacBook Pro 16-inch",
      year: 2023,
      processor: "Apple M2 Max",
      display: "16.2-inch Liquid Retina XDR",
      camera: "1080p FaceTime HD",
      battery: "Up to 21 hours",
      price: "$3499",
      picture: "../assets/images/33.jpeg",
    },
    {
      id: 34,
      brand: "Samsung",
      name: "Galaxy Chromebook 2",
      year: 2022,
      processor: "Intel Core i5",
      display: "13.3-inch QLED",
      camera: "720p",
      battery: "Up to 13 hours",
      price: "$699",
      picture: "../assets/images/34.jpeg",
    },
    {
      id: 35,
      brand: "Apple",
      name: "Mac Mini M2",
      year: 2023,
      processor: "Apple M2 Pro",
      display: "External Display Support",
      camera: "External Camera Support",
      battery: "N/A",
      price: "$1299",
      picture: "../assets/images/35.jpeg",
    },
    {
      id: 36,
      brand: "Samsung",
      name: "Galaxy Tab S9 Ultra",
      year: 2023,
      processor: "Qualcomm Snapdragon 8 Gen 2",
      display: "14.6-inch Super AMOLED",
      camera: "13 MP + 8 MP",
      battery: "11200 mAh",
      price: "$1199",
      picture: "../assets/images/36.jpeg",
    },
    {
      id: 37,
      brand: "Apple",
      name: "iMac M2 24-inch",
      year: 2023,
      processor: "Apple M2",
      display: "24-inch 4.5K Retina",
      camera: "1080p FaceTime HD",
      battery: "N/A",
      price: "$1499",
      picture: "../assets/images/37.jpeg",
    },
    {
      id: 38,
      brand: "Samsung",
      name: "Galaxy Book3 Pro 360",
      year: 2023,
      processor: "Intel Core i7 13th Gen",
      display: "16-inch AMOLED",
      camera: "1080p",
      battery: "76Wh",
      price: "$1899",
      picture: "../assets/images/38.jpeg",
    },
    {
      id: 39,
      brand: "Apple",
      name: "MacBook Air 15-inch",
      year: 2023,
      processor: "Apple M2",
      display: "15.3-inch Liquid Retina",
      camera: "1080p FaceTime HD",
      battery: "Up to 18 hours",
      price: "$1299",
      picture: "../assets/images/39.jpeg",
    },
    {
      id: 40,
      brand: "Samsung",
      name: "Galaxy Chromebook Go",
      year: 2021,
      processor: "Intel Celeron N4500",
      display: "14-inch HD",
      camera: "720p",
      battery: "Up to 12 hours",
      price: "$299",
      picture: "../assets/images/40.jpeg",
    },
    
    {
      id: 41,
      brand: "Apple",
      name: "iPhone 12 Mini",
      year: 2020,
      processor: "Apple A14 Bionic",
      display: "5.4-inch Super Retina XDR",
      camera: "12 MP + 12 MP",
      battery: "2227 mAh",
      price: "$699",
      picture: "../assets/images/41.jpeg",
    },
    {
      id: 42,
      brand: "Samsung",
      name: "Galaxy Z Flip 5",
      year: 2023,
      processor: "Qualcomm Snapdragon 8 Gen 2",
      display: "6.7-inch Foldable AMOLED",
      camera: "12 MP + 12 MP",
      battery: "3700 mAh",
      price: "$999",
      picture: "../assets/images/42.jpeg",
    },
    {
      id: 43,
      brand: "Oppo",
      name: "Reno 10 Pro+",
      year: 2023,
      processor: "Qualcomm Snapdragon 8+ Gen 1",
      display: "6.74-inch AMOLED",
      camera: "50 MP + 8 MP + 64 MP",
      battery: "4700 mAh",
      price: "$650",
      picture: "../assets/images/43.jpeg",
    },
    {
      id: 44,
      brand: "Apple",
      name: "iPad Pro M2",
      year: 2023,
      processor: "Apple M2",
      display: "12.9-inch Liquid Retina XDR",
      camera: "12 MP + 10 MP",
      battery: "10758 mAh",
      price: "$1499",
      picture: "../assets/images/44.jpeg",
    },
    {
      id: 45,
      brand: "Samsung",
      name: "Galaxy Tab S8",
      year: 2022,
      processor: "Qualcomm Snapdragon 8 Gen 1",
      display: "11-inch LCD",
      camera: "13 MP + 6 MP",
      battery: "8000 mAh",
      price: "$699",
      picture: "../assets/images/45.jpeg",
    },
    {
      id: 46,
      brand: "Apple",
      name: "Mac Studio M2 Ultra",
      year: 2023,
      processor: "Apple M2 Ultra",
      display: "External Display Support",
      camera: "External Camera Support",
      battery: "N/A",
      price: "$3999",
      picture: "../assets/images/46.jpeg",
    },
    {
      id: 47,
      brand: "Samsung",
      name: "Galaxy Book2 Pro",
      year: 2022,
      processor: "Intel Core i7 12th Gen",
      display: "13.3-inch AMOLED",
      camera: "720p",
      battery: "63Wh",
      price: "$1049",
      picture: "../assets/images/47.jpeg",
    },
    {
      id: 48,
      brand: "Apple",
      name: "iPad Air M1",
      year: 2022,
      processor: "Apple M1",
      display: "10.9-inch Liquid Retina",
      camera: "12 MP",
      battery: "7606 mAh",
      price: "$599",
      picture: "../assets/images/48.jpeg",
    },
    {
      id: 49,
      brand: "Samsung",
      name: "Galaxy Watch6",
      year: 2023,
      processor: "Exynos W930",
      display: "1.5-inch Super AMOLED",
      camera: "None",
      battery: "425 mAh",
      price: "$399",
      picture: "../assets/images/49.jpeg",
    },
    {
      id: 50,
      brand: "Oppo",
      name: "Oppo Watch 2",
      year: 2021,
      processor: "Qualcomm Snapdragon Wear 4100",
      display: "1.91-inch AMOLED",
      camera: "None",
      battery: "510 mAh",
      price: "$299",
      picture: "../assets/images/50.jpeg",
    },
  ];
  
  

  
  getPhones() {
    return this.mobilePhones;
  }
   applePhones = [
    { 
      id: 1, 
      brand: "Apple", 
      name: "iPhone 15 Pro", 
      year: 2023, 
      processor: "Apple A17 Bionic", 
      display: "6.1-inch Super Retina XDR OLED", 
      camera: "48 MP + 12 MP", 
      battery: "3279 mAh", 
      price: "$999", 
      picture: "../assets/images/1.jpg" 
    },
    { 
      id: 4, 
      brand: "Apple", 
      name: "iPhone 14 Pro", 
      year: 2022, 
      processor: "Apple A16 Bionic", 
      display: "6.1-inch Super Retina XDR OLED", 
      camera: "48 MP + 12 MP", 
      battery: "3200 mAh", 
      price: "$999", 
      picture: "../assets/images/4.jpg" 
    },
    { 
      id: 7, 
      brand: "Apple", 
      name: "iPhone 13 Pro", 
      year: 2021, 
      processor: "Apple A15 Bionic", 
      display: "6.1-inch Super Retina XDR OLED", 
      camera: "12 MP + 12 MP + 12 MP", 
      battery: "3095 mAh", 
      price: "$999", 
      picture: "../assets/images/7.jpg" 
    },
    { 
      id: 10, 
      brand: "Apple", 
      name: "iPhone 12", 
      year: 2020, 
      processor: "Apple A14 Bionic", 
      display: "6.1-inch Super Retina XDR OLED", 
      camera: "12 MP + 12 MP", 
      battery: "2815 mAh", 
      price: "$799", 
      picture: "../assets/images/10.jpg" 
    },
    { 
      id: 13, 
      brand: "Apple", 
      name: "iPhone 11", 
      year: 2019, 
      processor: "Apple A13 Bionic", 
      display: "6.1-inch Liquid Retina HD", 
      camera: "12 MP + 12 MP", 
      battery: "3110 mAh", 
      price: "$699", 
      picture: "../assets/images/13.jpg" 
    },
    { 
      id: 16, 
      brand: "Apple", 
      name: "iPhone SE (2022)", 
      year: 2022, 
      processor: "Apple A15 Bionic", 
      display: "4.7-inch Retina HD", 
      camera: "12 MP", 
      battery: "2018 mAh", 
      price: "$399", 
      picture: "../assets/images/16.jpg" 
    },
    { 
      id: 19, 
      brand: "Apple", 
      name: "iPhone XR", 
      year: 2018, 
      processor: "Apple A12 Bionic", 
      display: "6.1-inch Liquid Retina HD", 
      camera: "12 MP", 
      battery: "2942 mAh", 
      price: "$599", 
      picture: "../assets/images/19.jpg" 
    },
    { 
      id: 22, 
      brand: "Apple", 
      name: "iPhone 8", 
      year: 2017, 
      processor: "Apple A11 Bionic", 
      display: "4.7-inch Retina HD", 
      camera: "12 MP", 
      battery: "1821 mAh", 
      price: "$499", 
      picture: "../assets/images/22.jpg" 
    },
    { 
      id: 25, 
      brand: "Apple", 
      name: "iPhone 7", 
      year: 2016, 
      processor: "Apple A10 Fusion", 
      display: "4.7-inch Retina HD", 
      camera: "12 MP", 
      battery: "1960 mAh", 
      price: "$399", 
      picture: "../assets/images/25.jpg" 
    },
    { 
      id: 28, 
      brand: "Apple", 
      name: "iPhone 6s", 
      year: 2015, 
      processor: "Apple A9", 
      display: "4.7-inch Retina HD", 
      camera: "12 MP", 
      battery: "1715 mAh", 
      price: "$249", 
      picture: "../assets/images/28.jpg" 
    },
    
  {
    id: 31,
    brand: "Apple",
    name: "MacBook Air M2",
    year: 2022,
    processor: "Apple M2 Chip",
    display: "13.6-inch Liquid Retina",
    camera: "1080p FaceTime HD",
    battery: "Up to 18 hours",
    price: "$1199",
    picture: "../assets/images/31.jpeg",
  },
  {
    id: 33,
    brand: "Apple",
    name: "MacBook Pro 16-inch",
    year: 2023,
    processor: "Apple M2 Max",
    display: "16.2-inch Liquid Retina XDR",
    camera: "1080p FaceTime HD",
    battery: "Up to 21 hours",
    price: "$3499",
    picture: "../assets/images/33.jpeg",
  },
  {
    id: 35,
    brand: "Apple",
    name: "Mac Mini M2",
    year: 2023,
    processor: "Apple M2 Pro",
    display: "External Display Support",
    camera: "External Camera Support",
    battery: "N/A",
    price: "$1299",
    picture: "../assets/images/35.jpeg",
  },
  {
    id: 37,
    brand: "Apple",
    name: "iMac M2 24-inch",
    year: 2023,
    processor: "Apple M2",
    display: "24-inch 4.5K Retina",
    camera: "1080p FaceTime HD",
    battery: "N/A",
    price: "$1499",
    picture: "../assets/images/37.jpeg",
  },
  {
    id: 39,
    brand: "Apple",
    name: "MacBook Air 15-inch",
    year: 2023,
    processor: "Apple M2",
    display: "15.3-inch Liquid Retina",
    camera: "1080p FaceTime HD",
    battery: "Up to 18 hours",
    price: "$1299",
    picture: "../assets/images/39.jpeg",
  },
  {
    id: 41,
    brand: "Apple",
    name: "iPhone 12 Mini",
    year: 2020,
    processor: "Apple A14 Bionic",
    display: "5.4-inch Super Retina XDR",
    camera: "12 MP + 12 MP",
    battery: "2227 mAh",
    price: "$699",
    picture: "../assets/images/41.jpeg",
  },
  {
    id: 44,
    brand: "Apple",
    name: "iPad Pro M2",
    year: 2023,
    processor: "Apple M2",
    display: "12.9-inch Liquid Retina XDR",
    camera: "12 MP + 10 MP",
    battery: "10758 mAh",
    price: "$1499",
    picture: "../assets/images/44.jpeg",
  },
  {
    id: 46,
    brand: "Apple",
    name: "Mac Studio M2 Ultra",
    year: 2023,
    processor: "Apple M2 Ultra",
    display: "External Display Support",
    camera: "External Camera Support",
    battery: "N/A",
    price: "$3999",
    picture: "../assets/images/46.jpeg",
  },
  {
    id: 48,
    brand: "Apple",
    name: "iPad Air M1",
    year: 2022,
    processor: "Apple M1",
    display: "10.9-inch Liquid Retina",
    camera: "12 MP",
    battery: "7606 mAh",
    price: "$599",
    picture: "../assets/images/48.jpeg",
  },
  ];
  
  getApple(){
    return this.applePhones;
  }
   samsungPhones = [
    { 
      id: 2, 
      brand: "Samsung", 
      name: "Galaxy S23 Ultra", 
      year: 2023, 
      processor: "Qualcomm Snapdragon 8 Gen 2", 
      display: "6.8-inch Dynamic AMOLED 2X", 
      camera: "200 MP + 10 MP + 12 MP", 
      battery: "5000 mAh", 
      price: "$1199", 
      picture: "../assets/images/2.jpg" 
    },
    { 
      id: 5, 
      brand: "Samsung", 
      name: "Galaxy Z Fold 4", 
      year: 2022, 
      processor: "Qualcomm Snapdragon 8+ Gen 1", 
      display: "7.6-inch Foldable Dynamic AMOLED 2X", 
      camera: "50 MP + 12 MP + 10 MP", 
      battery: "4400 mAh", 
      price: "$1799", 
      picture: "../assets/images/5.jpg" 
    },
    { 
      id: 8, 
      brand: "Samsung", 
      name: "Galaxy S22 Ultra", 
      year: 2022, 
      processor: "Qualcomm Snapdragon 8 Gen 1", 
      display: "6.8-inch Dynamic AMOLED 2X", 
      camera: "108 MP + 10 MP + 12 MP", 
      battery: "5000 mAh", 
      price: "$1199", 
      picture: "../assets/images/8.jpg" 
    },
    { 
      id: 11, 
      brand: "Samsung", 
      name: "Galaxy A53 5G", 
      year: 2022, 
      processor: "Exynos 1280", 
      display: "6.5-inch Super AMOLED", 
      camera: "64 MP + 12 MP + 5 MP", 
      battery: "5000 mAh", 
      price: "$449", 
      picture: "../assets/images/11.jpg" 
    },
    { 
      id: 14, 
      brand: "Samsung", 
      name: "Galaxy Note 20 Ultra", 
      year: 2020, 
      processor: "Qualcomm Snapdragon 865+", 
      display: "6.9-inch Dynamic AMOLED 2X", 
      camera: "108 MP + 12 MP + 12 MP", 
      battery: "4500 mAh", 
      price: "$1299", 
      picture: "../assets/images/14.jpg" 
    },
    { 
      id: 17, 
      brand: "Samsung", 
      name: "Galaxy A73 5G", 
      year: 2022, 
      processor: "Qualcomm Snapdragon 778G", 
      display: "6.7-inch Super AMOLED Plus", 
      camera: "108 MP + 12 MP + 5 MP", 
      battery: "5000 mAh", 
      price: "$499", 
      picture: "../assets/images/17.jpg" 
    },
    { 
      id: 20, 
      brand: "Samsung", 
      name: "Galaxy S21 FE", 
      year: 2022, 
      processor: "Exynos 2100", 
      display: "6.4-inch Dynamic AMOLED 2X", 
      camera: "12 MP + 12 MP + 8 MP", 
      battery: "4500 mAh", 
      price: "$699", 
      picture: "../assets/images/20.jpg" 
    },
    { 
      id: 23, 
      brand: "Samsung", 
      name: "Galaxy A32", 
      year: 2021, 
      processor: "MediaTek Helio G80", 
      display: "6.4-inch Super AMOLED", 
      camera: "64 MP + 8 MP + 5 MP", 
      battery: "5000 mAh", 
      price: "$299", 
      picture: "../assets/images/23.jpg" 
    },
    { 
      id: 26, 
      brand: "Samsung", 
      name: "Galaxy M32", 
      year: 2021, 
      processor: "MediaTek Helio G80", 
      display: "6.4-inch Super AMOLED", 
      camera: "64 MP + 8 MP + 2 MP", 
      battery: "6000 mAh", 
      price: "$250", 
      picture: "../assets/images/26.jpg" 
    },
    { 
      id: 29, 
      brand: "Samsung", 
      name: "Galaxy S10", 
      year: 2019, 
      processor: "Qualcomm Snapdragon 855", 
      display: "6.1-inch Dynamic AMOLED", 
      camera: "12 MP + 12 MP + 16 MP", 
      battery: "3400 mAh", 
      price: "$699", 
      picture: "../assets/images/29.jpg" 
    },
    {
      id: 32,
      brand: "Samsung",
      name: "Galaxy Book3 Ultra",
      year: 2023,
      processor: "Intel Core i9 13th Gen",
      display: "16-inch AMOLED 3K",
      camera: "1080p",
      battery: "76Wh",
      price: "$2499",
      picture: "../assets/images/32.jpeg",
    },
    {
      id: 34,
      brand: "Samsung",
      name: "Galaxy Chromebook 2",
      year: 2022,
      processor: "Intel Core i5",
      display: "13.3-inch QLED",
      camera: "720p",
      battery: "Up to 13 hours",
      price: "$699",
      picture: "../assets/images/34.jpeg",
    },
    {
      id: 36,
      brand: "Samsung",
      name: "Galaxy Tab S9 Ultra",
      year: 2023,
      processor: "Qualcomm Snapdragon 8 Gen 2",
      display: "14.6-inch Super AMOLED",
      camera: "13 MP + 8 MP",
      battery: "11200 mAh",
      price: "$1199",
      picture: "../assets/images/36.jpeg",
    },
    {
      id: 38,
      brand: "Samsung",
      name: "Galaxy Book3 Pro 360",
      year: 2023,
      processor: "Intel Core i7 13th Gen",
      display: "16-inch AMOLED",
      camera: "1080p",
      battery: "76Wh",
      price: "$1899",
      picture: "../assets/images/38.jpeg",
    },
    {
      id: 40,
      brand: "Samsung",
      name: "Galaxy Chromebook Go",
      year: 2021,
      processor: "Intel Celeron N4500",
      display: "14-inch HD",
      camera: "720p",
      battery: "Up to 12 hours",
      price: "$299",
      picture: "../assets/images/40.jpeg",
    },
    {
      id: 42,
      brand: "Samsung",
      name: "Galaxy Z Flip 5",
      year: 2023,
      processor: "Qualcomm Snapdragon 8 Gen 2",
      display: "6.7-inch Foldable AMOLED",
      camera: "12 MP + 12 MP",
      battery: "3700 mAh",
      price: "$999",
      picture: "../assets/images/42.jpeg",
    },
    {
      id: 45,
      brand: "Samsung",
      name: "Galaxy Tab S8",
      year: 2022,
      processor: "Qualcomm Snapdragon 8 Gen 1",
      display: "11-inch LCD",
      camera: "13 MP + 6 MP",
      battery: "8000 mAh",
      price: "$699",
      picture: "../assets/images/45.jpeg",
    },
    {
      id: 47,
      brand: "Samsung",
      name: "Galaxy Book2 Pro",
      year: 2022,
      processor: "Intel Core i7 12th Gen",
      display: "13.3-inch AMOLED",
      camera: "720p",
      battery: "63Wh",
      price: "$1049",
      picture: "../assets/images/47.jpeg",
    },
    {
      id: 49,
      brand: "Samsung",
      name: "Galaxy Watch6",
      year: 2023,
      processor: "Exynos W930",
      display: "1.5-inch Super AMOLED",
      camera: "None",
      battery: "425 mAh",
      price: "$399",
      picture: "../assets/images/49.jpeg",
    },
  ];
  getSamsung(){
    return this.samsungPhones;
  }
 oppoPhones = [
    { 
      id: 3, 
      brand: "Oppo", 
      name: "Find X5 Pro", 
      year: 2022, 
      processor: "Qualcomm Snapdragon 8 Gen 1", 
      display: "6.7-inch LTPO2 AMOLED", 
      camera: "50 MP + 50 MP + 13 MP", 
      battery: "5000 mAh", 
      price: "$1200", 
      picture: "../assets/images/3.jpg" 
    },
    { 
      id: 6, 
      brand: "Oppo", 
      name: "Reno 8 Pro", 
      year: 2022, 
      processor: "MediaTek Dimensity 8100", 
      display: "6.7-inch AMOLED", 
      camera: "50 MP + 8 MP + 2 MP", 
      battery: "4500 mAh", 
      price: "$580", 
      picture: "../assets/images/6.jpg" 
    },
    { 
      id: 9, 
      brand: "Oppo", 
      name: "Reno 7 5G", 
      year: 2021, 
      processor: "Qualcomm Snapdragon 778G", 
      display: "6.43-inch AMOLED", 
      camera: "64 MP + 8 MP + 2 MP", 
      battery: "4500 mAh", 
      price: "$400", 
      picture: "../assets/images/9.jpg" 
    },
    { 
      id: 12, 
      brand: "Oppo", 
      name: "A94 5G", 
      year: 2021, 
      processor: "MediaTek Dimensity 800U", 
      display: "6.43-inch AMOLED", 
      camera: "48 MP + 8 MP + 2 MP", 
      battery: "4310 mAh", 
      price: "$300", 
      picture: "../assets/images/12.jpg" 
    },
    { 
      id: 15, 
      brand: "Oppo", 
      name: "Oppo F19 Pro+", 
      year: 2021, 
      processor: "MediaTek Dimensity 800U", 
      display: "6.43-inch Super AMOLED", 
      camera: "48 MP + 8 MP + 2 MP", 
      battery: "4310 mAh", 
      price: "$330", 
      picture: "../assets/images/15.jpg" 
    },
    { 
      id: 18, 
      brand: "Oppo", 
      name: "Oppo A54", 
      year: 2021, 
      processor: "MediaTek Helio P35", 
      display: "6.51-inch IPS LCD", 
      camera: "13 MP + 2 MP + 2 MP", 
      battery: "5000 mAh", 
      price: "$160", 
      picture: "../assets/images/18.jpg" 
    },
    { 
      id: 21, 
      brand: "Oppo", 
      name: "A31", 
      year: 2020, 
      processor: "MediaTek Helio P35", 
      display: "6.5-inch IPS LCD", 
      camera: "12 MP + 2 MP + 2 MP", 
      battery: "4230 mAh", 
      price: "$180", 
      picture: "../assets/images/21.jpg" 
    },
    { 
      id: 24, 
      brand: "Oppo", 
      name: "Oppo F17 Pro", 
      year: 2020, 
      processor: "MediaTek Helio P95", 
      display: "6.43-inch AMOLED", 
      camera: "48 MP + 8 MP + 2 MP", 
      battery: "4015 mAh", 
      price: "$250", 
      picture: "../assets/images/24.jpg" 
    },
    { 
      id: 27, 
      brand: "Oppo", 
      name: "Oppo A15", 
      year: 2020, 
      processor: "MediaTek Helio P35", 
      display: "6.52-inch IPS LCD", 
      camera: "13 MP + 2 MP + 2 MP", 
      battery: "4230 mAh", 
      price: "$150", 
      picture: "../assets/images/27.jpg" 
    },
    { 
      id: 30, 
      brand: "Oppo", 
      name: "Oppo F19", 
      year: 2021, 
      processor: "Qualcomm Snapdragon 662", 
      display: "6.43-inch AMOLED", 
      camera: "48 MP + 2 MP + 2 MP", 
      battery: "5000 mAh", 
      price: "$220", 
      picture: "../assets/images/30.jpg" 
    },
    {
      id: 43,
      brand: "Oppo",
      name: "Reno 10 Pro+",
      year: 2023,
      processor: "Qualcomm Snapdragon 8+ Gen 1",
      display: "6.74-inch AMOLED",
      camera: "50 MP + 8 MP + 64 MP",
      battery: "4700 mAh",
      price: "$650",
      picture: "../assets/images/43.jpeg",    },
    {
      id: 50,
      brand: "Oppo",
      name: "Oppo Watch 2",
      year: 2021,
      processor: "Qualcomm Snapdragon Wear 4100",
      display: "1.91-inch AMOLED",
      camera: "None",
      battery: "510 mAh",
      price: "$299",
      picture: "../assets/images/50.jpeg",
    },
  ];
  getOppo(){
    return this.oppoPhones;
  };

  cartItems: {id: number}[] = [];
  constructor(){}
  getItemById(id:any){
    return this.mobilePhones.find((item)=>item.id===id);
    
  }
  private cartsubject =new Subject<number>();
  cart$ =this.cartsubject.asObservable();
  addToCart(id: number): void {
    const productExists = this.cartItems.find((item) => item.id === id);
    if (!productExists) {
      this.cartItems.push({ id }); 
      console.log(`Item with ID ${id} added to cartItems.`);
    } else {
      console.log(`Item with ID ${id} is already in the cart.`);
    }
  }
getCartItems() {
  return this.mobilePhones.map((cartItem) =>
    this.getItemById(cartItem.id)
  );
}

StoresInEgypt = [
  {
    id: 1,
    name: "Cairo Downtown",
    address: "123 El-Tahrir Street, Downtown, Cairo",
    phone: "+20 2 1234 5678",
    hours: "10:00 AM - 9:00 PM",
    picture: "../assets/images/L1.jpeg", 
  },
  {
    id: 2,
    name: "Alexandria City Center",
    address: "45 Saad Zaghloul Street, Alexandria",
    phone: "+20 3 1234 5678",
    hours: "10:00 AM - 10:00 PM",
    picture: "../assets/images/L2.jpg", 
  },
  {
    id: 3,
    name: "Giza Pyramids",
    address: "78 Pyramids Road, Giza",
    phone: "+20 2 5678 1234",
    hours: "11:00 AM - 8:00 PM",
    picture: "../assets/images/L3.jpg", 
  },
  {
    id: 4,
    name: "Mansoura",
    address: "20 Port Said Street, Mansoura",
    phone: "+20 50 1234 5678",
    hours: "9:00 AM - 9:00 PM",
    picture: "../assets/images/L4.jpeg", 
  },
  {
    id: 5,
    name: "Tanta",
    address: "15 El-Geish Street, Tanta",
    phone: "+20 40 5678 1234",
    hours: "10:00 AM - 9:00 PM",
    picture: "../assets/images/L5.jpg", 
  },
  {
    id: 6,
    name: "Assiut",
    address: "12 Nile Corniche, Assiut",
    phone: "+20 88 1234 5678",
    hours: "10:00 AM - 10:00 PM",
    picture: "../assets/images/L6.jpeg", 
  },
  {
    id: 7,
    name: "Sharm El Sheikh",
    address: "7 Peace Road, Sharm El Sheikh",
    phone: "+20 69 1234 5678",
    hours: "11:00 AM - 10:00 PM",
    picture: "../assets/images/L7.jpg", 
  },
  {
    id: 8,
    name: "Hurghada",
    address: "10 Sheraton Road, Hurghada",
    phone: "+20 65 1234 5678",
    hours: "10:00 AM - 9:00 PM",
    picture: "../assets/images/L8.jpeg", 
  },
  {
    id: 9,
    name: "Nasr City",
    address: "25 Makram Ebeid Street, Nasr City, Cairo",
    phone: "+20 2 2345 6789",
    hours: "10:00 AM - 10:00 PM",
    picture: "../assets/images/L9.jpeg", 
  },
  {
    id: 10,
    name: "New Cairo",
    address: "90th Street, 5th Settlement, New Cairo",
    phone: "+20 2 3456 7890",
    hours: "11:00 AM - 8:00 PM",
    picture: "../assets/images/L10.jpeg", 
  },
  {
    id: 11,
    name: "Heliopolis",
    address: "Korba Square, Heliopolis, Cairo",
    phone: "+20 2 4567 8901",
    hours: "9:00 AM - 9:00 PM",
    picture: "../assets/images/L11.jpeg", 
  },
  {
    id: 12,
    name: "Ismailia",
    address: "13 Salah Salem Street, Ismailia",
    phone: "+20 64 1234 5678",
    hours: "10:00 AM - 9:00 PM",
    picture: "../assets/images/L12.jpeg", 
  },
  {
    id: 13,
    name: "Port Said",
    address: "30 Mohamed Ali Street, Port Said",
    phone: "+20 66 1234 5678",
    hours: "9:00 AM - 9:00 PM",
    picture: "../assets/images/L13.jpeg", 
  },
  {
    id: 14,
    name: "Aswan",
    address: "25 Nile Corniche, Aswan",
    phone: "+20 97 1234 5678",
    hours: "10:00 AM - 8:00 PM",
    picture: "../assets/images/L14.jpeg", 
  },
  {
    id: 15,
    name: "Sohag",
    address: "5 University Street, Sohag",
    phone: "+20 93 1234 5678",
    hours: "10:00 AM - 9:00 PM",
    picture: "../assets/images/L15.jpeg", 
  },
];
getStores(){
  return this.StoresInEgypt
};

}

