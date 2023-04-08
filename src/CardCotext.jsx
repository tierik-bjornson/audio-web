import { createContext, useContext, useState } from "react";

const CardContext = createContext(undefined);

export const CardProvider = ({ children }) => {
  const [cardCount, setCardCount] = useState(0);
  const [cardItem, setCardItem] = useState([]);

  const totlalPrice = cardItem.reduce((prevValue, currValue) => {
    return prevValue + currValue
  }, 0)

  return (
    <CardContext.Provider
      value={{
        cardCount,
        totlalPrice,
        cardAdd: (count) => setCardCount(cardCount + count),
        cardSub: () => setCardCount(cardCount === 0 ? null : cardCount - 1),
        insertCardData: (data) => setCardItem(data),
        cardItem
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
