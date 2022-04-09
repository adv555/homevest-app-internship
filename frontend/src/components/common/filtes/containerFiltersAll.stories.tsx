import React from "react";
import { ComponentStory } from "@storybook/react";
import ContainerFiltersAll from "./containerFiltersAll";

export default {
    title: "UI/Form/FiltersAll",
    component: ContainerFiltersAll
};

const property = [
    {
        "id": "0001",
        "estateName": "RC Rainbow"
    },
    {
        "id": "0002",
        "estateName": "RC Mynai"
    },
    {
        "id": "0003",
        "estateName": "RC River"
    },
    {
        "id": "0004",
        "estateName": "Drop"
    },
    {
        "id": "0005",
        "estateName": "RC Tree"
    },
    {
        "id": "0006",
        "estateName": "RC White"
    },
    {
        "id": "0007",
        "estateName": "RC Brown"
    }
]

const Template: ComponentStory<typeof ContainerFiltersAll> = (args) => {
    
    
    return <ContainerFiltersAll {...args} returnValueAll={(value:any) => console.log(value)}/>
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

export const visibleProperty = Template.bind({});
visibleProperty.args = {
    property: {isVisible: true}
}

export const proprtyProprty = Template.bind({});
proprtyProprty.args = {
    property: {property: property}
}