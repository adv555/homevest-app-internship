import React from "react";
import { ComponentStory } from "@storybook/react";
import ContainerFiltersAndPrice from "./containerFiltersAndPrice";

export default {
    title: "UI/Form/FiltersAndPrice",
    component: ContainerFiltersAndPrice
};

const property = [
    {
        "id": "0001",
        "company": "RC Rainbow"
    },
    {
        "id": "0002",
        "company": "RC Mynai"
    },
    {
        "id": "0003",
        "company": "RC River"
    },
    {
        "id": "0004",
        "company": "Drop"
    },
    {
        "id": "0005",
        "company": "RC Tree"
    },
    {
        "id": "0006",
        "company": "RC White"
    },
    {
        "id": "0007",
        "company": "RC Brown"
    }
]

const Template: ComponentStory<typeof ContainerFiltersAndPrice> = (args) => {
    
    
    return <ContainerFiltersAndPrice {...args} returnValueAll={(value:any) => console.log(value)}/>
}

export const SimpleFilters = Template.bind({});
SimpleFilters.args = {
}

export const visibleFilters = Template.bind({});
visibleFilters.args = {
    filters: {isVisible: true}
}

export const visiblePrice = Template.bind({});
visiblePrice.args = {
    price: {isVisible: true}
}

export const fullPrice = Template.bind({});
fullPrice.args = {
    price: {
        fullPrice: 500000
    }
}

export const fullPriceM2 = Template.bind({});
fullPriceM2.args = {
    price: {
        fullPriceM2: 40000
    }
}

export const currencyPrice = Template.bind({});
currencyPrice.args = {
    price: {
        currency: ['pounds', 'dollar']
    }
}
