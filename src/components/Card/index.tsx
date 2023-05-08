import React from "react";
import { ICard } from "interfaces/card.interface";
import { format, parseISO } from "date-fns";
import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <h4>
            <>
              {dados.user?.name} - {dados.created_at && format(
                parseISO(dados.created_at),
                "dd/MM/yyyy HH:mm:ss"
              )}
            </>
          </h4>
          <h3>Título: {dados.title}</h3>
          <h3>Mensagem: {dados.message}</h3>
          <div>
            {dados.messageTopic?.map((topic) => (
              <span key={topic.id}>{topic.name}</span>
            ))}
          </div>
        </div>
      )}
    </S.Card>
  );
};

export default Card;