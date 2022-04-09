import React from "react";
import clsx from "clsx";
import Filter from "./filters";
import Price from "./price";
import PropertyDevelopers from "./propertyDevelopers";
import { IDataFilters, ISelectPrice, IContainerFiters } from "./types/types";

const ContainerFiltersAll: React.FC<IContainerFiters> = (props) => {
  const {
    filters = {
      isVisible: props.filters?.isVisible || false,
      data: props.filters?.data || undefined,
      selectFilters: props.filters?.selectFilters || {},
    },
    price = {
      isVisible: props.price?.isVisible || false,
      fullPrice: props.price?.fullPrice || undefined,
      fullPriceM2: props.price?.fullPriceM2 || undefined,
      currency: props.price?.currency || undefined,
      selectPrice: props.price?.selectPrice || {},
    },
    property = {
      isVisible: props.property?.isVisible || false,
      property: props.property?.property || [],
      selectProperty: props.property?.selectProperty || [],
    },
    returnValueAll,
  } = props;

  const [isFilterVisible, setIsFilterVisible] = React.useState(
    filters.isVisible
  );
  const [isPriceVisible, setIsPriceVisible] = React.useState(price.isVisible);
  const [isPropertyVisible, setIsPropertyVisible] = React.useState(
    property.isVisible
  );
  const [selectProperty, setSelectProperty] = React.useState(
    property.selectProperty || ([] as string[])
  );
  const [selectPrice, setSelectPrice] = React.useState(
    price.selectPrice || ({} as ISelectPrice)
  );
  const [selectFilters, setSelectFilters] = React.useState(
    filters.selectFilters || ({} as IDataFilters)
  );

  React.useEffect(() => {
    handlerValueParent();
  }, [selectProperty, selectPrice, selectFilters]);

  function handlerValueParent() {
    let result = {};

    if (Object.keys(selectFilters).length) {
      result = { ...result, filters: selectFilters };
    }

    if (Object.keys(selectPrice).length) {
      result = { ...result, price: selectPrice };
    }

    if (selectProperty.length) {
      result = { ...result, property: selectProperty };
    }

    if (Object.keys(result).length) {
      returnValueAll(result);

      return;
    }

    returnValueAll({});
  }

  function handlerSetSelectProperty(property: string[]): void {
    setSelectProperty(property);
  }

  function handlerVisibleFilters() {
    setIsFilterVisible(!isFilterVisible);
    setIsPriceVisible(false);
    setIsPropertyVisible(false);
  }

  function handlerVisiblePrice() {
    setIsFilterVisible(false);
    setIsPriceVisible(!isPriceVisible);
    setIsPropertyVisible(false);
  }

  function handlerVisibleProperty() {
    setIsFilterVisible(false);
    setIsPriceVisible(false);
    setIsPropertyVisible(!isPropertyVisible);
  }

  const handlerSetSelectPrice = (value: ISelectPrice) => {
    setSelectPrice(value);
  };

  const handlerSetSelectFilters = (value: IDataFilters) => {
    setSelectFilters(value);
  };

  return (
    <div className={clsx("flex gap-7 h-9 max-w-630 relative")}>
      <Filter
        isVisible={isFilterVisible}
        handlerVisible={() => handlerVisibleFilters()}
        handlerReturnFilters={(value) => handlerSetSelectFilters(value)}
      />
      <Price
        isVisible={isPriceVisible}
        fullPrice={price.fullPrice}
        fullPriceM2={price.fullPriceM2}
        currency={price.currency}
        handlerVisible={() => handlerVisiblePrice()}
        handlerSetSelectPrice={(value: ISelectPrice) =>
          handlerSetSelectPrice(value)
        }
      />
      <PropertyDevelopers
        property={property.property}
        propertySelect={selectProperty}
        isVisible={isPropertyVisible}
        handlerVisible={() => handlerVisibleProperty()}
        returnPropertyDevelopers={(property) =>
          handlerSetSelectProperty(property)
        }
      />
    </div>
  );
};

export default ContainerFiltersAll;
