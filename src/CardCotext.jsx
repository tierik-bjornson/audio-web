import { createContext, useContext, useState } from "react";

const CardContext = createContext(undefined);

export const CardProvider = ({ children }) => {
  const [cardCount, setCardCount] = useState(0);
  const [cardItem, setCardItem] = useState([{id:'',name:'',desc:'', img:'', count:''}]);

  return (
    <CardContext.Provider
      value={{
        cardCount,
        cardAdd: (count) => setCardCount(cardCount + count),
        cardSub: () => setCardCount(cardCount === 0 ? null : cardCount - 1),
        insertCardData: (data) => setCardItem({data}),
        cardItem
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
