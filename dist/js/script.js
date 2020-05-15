"use strict";

var dogBtn = document.getElementById('dogBtn');
var catBtn = document.getElementById('catBtn');
var bbBtn = document.getElementById('bbBtn');
var envBtn = document.getElementById('envBtn'); //ARTICLE 1

var art1Title = document.getElementById('art1-title');
var art1Desc = document.getElementById('art1-desc');
var art1Img = document.getElementById('art1-img'); //ARTICLE 2

var art2Title = document.getElementById('art2-title');
var art2Desc = document.getElementById('art2-desc');
var art2Img = document.getElementById('art2-img'); //ARTICLE 3

var art3Title = document.getElementById('art3-title');
var art3Desc = document.getElementById('art3-desc');
var art3Img = document.getElementById('art3-img');
var catUrl = 'https://newsapi.org/v2/everything?q=%22cat%22%20OR%20cats%20OR%20kitten%20OR%20kittens%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c';
var dogUrl = 'https://newsapi.org/v2/everything?q=%22dog%22%20OR%20dogs%20OR%20puppy%20OR%20puppies%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c';
var bbUrl = 'https://newsapi.org/v2/everything?q=%22baby%22%20OR%20babies%20OR%20child%20OR%20children%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c';
var envUrl = 'https://newsapi.org/v2/everything?q=%22environment%22%20OR%20nature%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c'; //TO DO

/*
make a function that requests the articles for the corresponding
topics based on which button is clicked (maybe thru async and await funcs for reqs)

fix the url to be positive articles

the code below will populate the article titles, descs, and images
*/

dogBtn.onclick = function () {
  dogBtn.className = dogBtn.className + ' active';
  catBtn.className = catBtn.className - ' active';
  bbBtn.className = bbBtn.className - ' active';
  envBtn.className = envBtn.className - ' active';
  var articles;
  var req = new Request(dogUrl);
  fetch(req).then(function (response) {
    return response.json();
  }).then(function (data) {
    articles = data;
  });

  function data() {
    if (articles == undefined) {
      console.log("Data is being parsed");
    } else {
      console.log(articles);
      clearInterval(loadData);
      generateData(articles);
    }
  }

  var loadData = setInterval(data, 1000);

  function generateData(articles) {
    var newData = articles.articles;
    art1Title.innerHTML = newData[0].title;
    art1Desc.innerHTML = newData[0].description;
    art1Img.src = newData[0].urlToImage;
    art2Title.innerHTML = newData[1].title;
    art2Desc.innerHTML = newData[1].description;
    art2Img.src = newData[1].urlToImage;
    art3Title.innerHTML = newData[2].title;
    art3Desc.innerHTML = newData[2].description;
    art3Img.src = newData[2].urlToImage;
  }
};

catBtn.onclick = function () {
  catBtn.className = catBtn.className + ' active';
  dogBtn.className = dogBtn.className - ' active';
  bbBtn.className = bbBtn.className - ' active';
  envBtn.className = envBtn.className - ' active';
  var articles;
  var req = new Request(catUrl);
  fetch(req).then(function (response) {
    return response.json();
  }).then(function (data) {
    articles = data;
  });

  function data() {
    if (articles == undefined) {
      console.log("Data is being parsed");
    } else {
      console.log(articles);
      clearInterval(loadData);
      generateData(articles);
    }
  }

  var loadData = setInterval(data, 1000);

  function generateData(articles) {
    var newData = articles.articles;
    art1Title.innerHTML = newData[0].title;
    art1Desc.innerHTML = newData[0].description;
    art1Img.src = newData[0].urlToImage;
    art2Title.innerHTML = newData[1].title;
    art2Desc.innerHTML = newData[1].description;
    art2Img.src = newData[1].urlToImage;
    art3Title.innerHTML = newData[2].title;
    art3Desc.innerHTML = newData[2].description;
    art3Img.src = newData[2].urlToImage;
  }
};

bbBtn.onclick = function () {
  bbBtn.className = bbBtn.className + ' active';
  catBtn.className = catBtn.className - ' active';
  dogBtn.className = dogBtn.className - ' active';
  envBtn.className = envBtn.className - ' active';
  var articles;
  var req = new Request(bbUrl);
  fetch(req).then(function (response) {
    return response.json();
  }).then(function (data) {
    articles = data;
  });

  function data() {
    if (articles == undefined) {
      console.log("Data is being parsed");
    } else {
      console.log(articles);
      clearInterval(loadData);
      generateData(articles);
    }
  }

  var loadData = setInterval(data, 1000);

  function generateData(articles) {
    var newData = articles.articles;
    art1Title.innerHTML = newData[0].title;
    art1Desc.innerHTML = newData[0].description;
    art1Img.src = newData[0].urlToImage;
    art2Title.innerHTML = newData[1].title;
    art2Desc.innerHTML = newData[1].description;
    art2Img.src = newData[1].urlToImage;
    art3Title.innerHTML = newData[2].title;
    art3Desc.innerHTML = newData[2].description;
    art3Img.src = newData[2].urlToImage;
  }
};

envBtn.onclick = function () {
  envBtn.className = envBtn.className + ' active';
  catBtn.className = catBtn.className - ' active';
  bbBtn.className = bbBtn.className - ' active';
  dogBtn.className = envBtn.className - ' active';
  var articles;
  var req = new Request(envUrl);
  fetch(req).then(function (response) {
    return response.json();
  }).then(function (data) {
    articles = data;
  });

  function data() {
    if (articles == undefined) {
      console.log("Data is being parsed");
    } else {
      console.log(articles);
      clearInterval(loadData);
      generateData(articles);
    }
  }

  var loadData = setInterval(data, 1000);

  function generateData(articles) {
    var newData = articles.articles;
    art1Title.innerHTML = newData[0].title;
    art1Desc.innerHTML = newData[0].description;
    art1Img.src = newData[0].urlToImage;
    art2Title.innerHTML = newData[1].title;
    art2Desc.innerHTML = newData[1].description;
    art2Img.src = newData[1].urlToImage;
    art3Title.innerHTML = newData[2].title;
    art3Desc.innerHTML = newData[2].description;
    art3Img.src = newData[2].urlToImage;
  }
};