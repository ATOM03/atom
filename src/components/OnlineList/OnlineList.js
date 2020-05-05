import React from "react";
import "./OnlineList.css";
import ScrollToBottom from "react-scroll-to-bottom";

const OnlineList = () => (
  <ScrollToBottom>
    <div className="OuterOnlineList">
      <div className="HeaderOnlineList">
        <h4>Online</h4>
      </div>
      <a href="/chat?name=Priyanshu" className="pl">
        <ul>Priyanshu</ul>
      </a>
      <a href="/chat?name=priyanshu" className="pl">
        <ul>priyanshu</ul>
      </a>
      <a href="/chat?name=Sumit" className="pl">
        <ul>Sumit</ul>
      </a>
      <a href="/chat?name=Deepanshu" className="pl">
        <ul>Deepanshu</ul>
      </a>
      <a href="/chat?name=Ajay" className="pl">
        <ul>Ajay</ul>
      </a>
      <a href="/chat?name=Surchi" className="pl">
        <ul>Surchi</ul>
      </a>
      <a href="/chat?name=NirajanSir" className="pl">
        <ul>NirajanSir</ul>
      </a>
      <a href="/chat?name=MandeepSir" className="pl">
        <ul>MandeepSir</ul>
      </a>
      <a href="/chat?name=PriteshSir" className="pl">
        <ul>PriteshSir</ul>
      </a>
    </div>
  </ScrollToBottom>
);
export default OnlineList;
