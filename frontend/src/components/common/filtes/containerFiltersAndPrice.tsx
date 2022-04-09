import React from "react";
import clsx from "clsx";
import Filter from "./filters";
import Price from "./price";
import { IDataFilters, ISelectPrice, IContainerFiters } from "./types/types";

const ContainerFiltersAndPrice: React.FC<IContainerFiters> = (props) => {
  const {
    filters = {
      isVisible: props.filters?.isVisible || false,
      data: props.filters?.data || undefined,
      selectFilters: props.filters?.data || {},
    },
    price = {
      isVisible: props.price?.isVisible || false,
      fullPrice: props.price?.fullPrice || undefined,
      fullPriceM2: props.price?.fullPriceM2 || undefined,
      currency: props.price?.currency || undefined,
      selectPrice: props.price?.selectPrice || {},
    },
    returnValueAll,
  } = props;

  const [isFilterVisible, setIsFilterVisible] = React.useState(
    filters.isVisible
  );
  const [isPriceVisible, setIsPriceVisible] = React.useState(price.isVisible);
  const [selectPrice, setSelectPrice] = React.useState(
    price.selectPrice as ISelectPrice
  );
  const [selectFilters, setSelectFilters] = React.useState(
    filters.selectFilters as IDataFilters
  );

  React.useEffect(() => {
    handlerValueParent();
  }, [selectPrice, selectFilters]);

  function handlerValueParent() {
    let result = {};

    if (Object.keys(selectFilters).length) {
      result = { ...result, filters: selectFilters };
    }

    if (Object.keys(selectPrice).length) {
      result = { ...result, price: selectPrice };
    }

    if (Object.keys(result).length) {
      returnValueAll(result);
    }
  }

  function handlerVisibleFilters() {
    setIsFilterVisible(!isFilterVisible);
    setIsPriceVisible(false);
  }

  function handlerVisiblePrice() {
    setIsFilterVisible(false);
    setIsPriceVisible(!isPriceVisible);
  }

  const handlerSetSelectPrice = (value: ISelectPrice) => {
    setSelectPrice(value);
    setIsFilterVisible(false);
  };

  const handlerSetSelectFilters = (value: IDataFilters) => {
    setSelectFilters(value);
    setIsPriceVisible(false);
  };

  return (
    <div className={clsx("flex gap-7 h-9 justify-end max-w-630 relative")}>
      <Filter
        isVisible={isFilterVisible}
        handlerVisible={() => handlerVisibleFilters()}
        handlerReturnFilters={(value) => handlerSetSelectFilters(value)}
      />
      <Price
        isVisible={isPriceVisible}
        handlerVisible={() => handlerVisiblePrice()}
        handlerSetSelectPrice={(value: ISelectPrice) =>
          handlerSetSelectPrice(value)
        }
      />
    </div>
  );
};

export default ContainerFiltersAndPrice;
