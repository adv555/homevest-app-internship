import React from "react";
import MultipleRange from "../rangeMultiple/rangeMutiple";
import ToggleButton from "../button/toggleBtn";
import Button from "../button/button";
import { IPropsPrice } from "./types/types";
import clsx from "clsx";

const Price: React.FC<IPropsPrice> = (props) => {
  const {
    isVisible = false,
    className = {
      button:
        props.className?.button ||
        "border-2 border-light-blue flex hover:bg-light-blue hover:text-white items-center justify-between leading-7 mix-w-150 px-2 rounded-md text-body-small text-green w-full",
    },
    fullPrice = props.fullPrice || 1000000,
    fullPriceM2 = props.fullPriceM2 || 65000,
    currency = props.currency || ["hryvnia", "dollar"],
    selectPrice = {
      price: props.selectPrice?.price || { min: 0, max: fullPrice },
      priceForM2: props.selectPrice?.priceForM2 || { min: 0, max: fullPriceM2 },
      currency: props.selectPrice?.currency || [],
      lending: props.selectPrice?.lending || false,
      installments: props.selectPrice?.installments || false,
      mortgage: props.selectPrice?.mortgage || false,
    },
    handlerVisible,
    handlerSetSelectPrice,
  } = props;

  const [priceSelect, setPriceSelect] = React.useState(selectPrice);

  const handlerSetCurrency = (value: string) => {
    if (priceSelect.currency?.indexOf(value) !== -1) {
      const result = priceSelect.currency?.filter((item) => item != value);
      setPriceSelect({ ...priceSelect, currency: result });
      return;
    }

    setPriceSelect({
      ...priceSelect,
      currency: [...priceSelect.currency, value],
    });
  };

  const handlerPrice = (value: { min: number; max: number }) => {
    setPriceSelect({ ...priceSelect, price: value });
  };

  const handlerPriceM2 = (value: { min: number; max: number }): void => {
    setPriceSelect({ ...priceSelect, priceForM2: value });
  };

  const handlerSetLending = (value: boolean) => {
    setPriceSelect({ ...priceSelect, lending: value });
  };

  const handlerSetInstallments = (value: boolean) => {
    setPriceSelect({ ...priceSelect, installments: value });
  };

  const handlerSetMortgage = (value: boolean) => {
    setPriceSelect({ ...priceSelect, mortgage: value });
  };

  const handlerReturnSelectProperty = () => {
    let result = {};

    if (priceSelect.price?.min !== 0 || priceSelect.price.max !== fullPrice) {
      result = { ...result, price: priceSelect.price };
    }

    if (
      priceSelect.priceForM2?.min !== 0 ||
      priceSelect.priceForM2.max !== fullPriceM2
    ) {
      result = { ...result, priceForM2: priceSelect.priceForM2 };
    }

    if (priceSelect.currency?.length) {
      result = { ...result, currency: [...priceSelect.currency] };
    }

    if (priceSelect.lending) {
      result = { ...result, lending: priceSelect.lending };
    }

    if (priceSelect.installments) {
      result = { ...result, installments: priceSelect.installments };
    }

    if (priceSelect.mortgage) {
      result = { ...result, mortgage: priceSelect.mortgage };
    }

    handlerSetSelectPrice(result);
    handlerVisible();
  };

  const handlerResetAllFilters = () => {
    setPriceSelect({
      price: { min: 0, max: fullPrice },
      priceForM2: { min: 0, max: fullPriceM2 },
      currency: [],
      lending: false,
      installments: false,
      mortgage: false,
    });
    handlerSetSelectPrice({});
  };

  return (
    <>
      <div className={clsx("max-w-210 min-w-190 z-20")}>
        <button onClick={handlerVisible} className={clsx(className.button)}>
          Price
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("h-4 w-6")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={clsx(
            (isVisible ? "" : "hidden ") +
              "absolute left-0 w-full bg-white font-medium mt-2 px-4 py-2 rounded-md shadow-card text-body-large text-left z-10"
          )}
        >
          <div className={clsx("flex flex-col justify-start my-4")}>
            <label>Price</label>
            <div className={clsx("flex gap-1 mt-2 w-full flex-col")}>
              <MultipleRange
                fullMax={fullPrice}
                min={priceSelect.price?.min}
                max={priceSelect.price?.max}
                returnValues={handlerPrice}
              />
            </div>
          </div>
          <div className={clsx("flex flex-col justify-start my-4")}>
            <label>Price for m2</label>
            <div className={clsx("flex gap-1 mt-2 w-full flex-col")}>
              <MultipleRange
                fullMax={fullPriceM2}
                min={priceSelect.priceForM2?.min}
                max={priceSelect.priceForM2?.max}
                returnValues={handlerPriceM2}
              />
            </div>
          </div>
          <div className={clsx("flex flex-col justify-start my-4")}>
            <label>Currency</label>
            <div className={clsx("flex gap-1")}>
              {!currency.length ? (
                <h1>Currency not found</h1>
              ) : (
                currency.map((item: string, index: number) => {
                  return (
                    <button
                      key={"currently" + index}
                      className={clsx(
                        (priceSelect.currency?.indexOf(item) !== -1
                          ? "bg-grey "
                          : "bg-light-grey") + " p-1 px-3 hover:bg-grey"
                      )}
                      onClick={() => handlerSetCurrency(item)}
                    >
                      {item}
                    </button>
                  );
                })
              )}
            </div>
          </div>
          <div className={clsx("flex justify-start my-4")}>
            <label className={clsx("mr-4 mt-1")}>The option of lending</label>
            <div className={clsx("flex gap-1")}>
              <ToggleButton
                checked={priceSelect.lending}
                getSwitched={handlerSetLending}
              />
            </div>
          </div>
          <div className={clsx("flex justify-start my-4")}>
            <label className={clsx("mr-4 mt-1")}>Installments</label>
            <div className={clsx("flex gap-1")}>
              <ToggleButton
                checked={priceSelect.installments}
                getSwitched={handlerSetInstallments}
              />
            </div>
          </div>
          <div className={clsx("flex justify-start my-4")}>
            <label className={clsx("mr-4 mt-1")}>Mortgage</label>
            <div className={clsx("flex gap-1")}>
              <ToggleButton
                checked={priceSelect.mortgage}
                getSwitched={handlerSetMortgage}
              />
            </div>
          </div>
          <div className={clsx("flex gap-7 text-body text-green")}>
            <Button
              className={clsx(
                "bg-white border-none box-border duration-200 flex focus:text-green-pressed font-medium h-9 items-center justify-start px-3 py-4 rounded-lg text-base text-green text-left w-40"
              )}
              nameBtn={"tertiary"}
              label={"Reset All Fiters"}
              onClick={handlerResetAllFilters}
            />
            {/*  */}
            <Button
              className={clsx(
                "bg-white border-none box-border duration-200 flex focus:text-green-pressed font-medium h-9 items-center justify-start px-3 py-4 rounded-lg text-base text-green text-left w-40"
              )}
              nameBtn={"tertiary"}
              label={"Show"}
              onClick={handlerReturnSelectProperty}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
