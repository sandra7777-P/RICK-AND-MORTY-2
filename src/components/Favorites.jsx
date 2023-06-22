import React from "react";
import { connect } from "react-redux";
import style from '../styles/Cards.module.css'
import Card from './Card'

function Favorites({ myFavorites, onClose, seteandoTitle }) {
  return (
    <div className={style.cards}>
      {myFavorites?.map((char, index) => {
        return (
          <Card
            key={char.id}
            char={char}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}

function mapState(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapState)(Favorites);