export interface ICompany {
    id: string,
    companyId?: string,
    estateName?: string,
    estateLogo?: string,
    numberOfFlats?: number,
    numberOfBuildings?: number,
    constructionDetails?: string,
    amountOfMoney?: string,
    lacation?: string,
    status?: string,
    fundingState?: string,
    annualReturn?: number,
    duration?: number,
    distribution?: number,
    profit?: string,
    favorite?: boolean
}

export interface IClassName {
    button: string
}
  
export interface IPropsPropertyDevelopers {
    property?: ICompany[],
    className?: {button?: string, block?: string},
    propertySelect?: string[],
    isVisible?: boolean,
    handlerVisible: () => void,
    returnPropertyDevelopers: (value: string[]) => void
}

export interface IPropsPrice {
    isVisible?: boolean;
    className?: { button: string };
    currency?: string[];
    fullPrice?: number;
    fullPriceM2?: number;
    selectPrice?: ISelectPrice;
    handlerVisible: () => void;
    handlerSetSelectPrice: (value: ISelectPrice) => void;
}

export interface ISelectPrice {
    price?: { min: number; max: number };
    priceForM2?: { min: number; max: number };
    currency?: string[];
    lending?: boolean;
    installments?: boolean;
    mortgage?: boolean;
}

export interface IPropsFilters {
    isVisible?: boolean;
    data?: IDataFilters;
    selectFilters?: any;
    className?: { button: string };
    handlerVisible: () => void;
    handlerReturnFilters: (value: IDataFilters) => void;
}

export interface IDataFilters {
    numberOfRooms?: IDataItemFilters | string[];
    yearOfOperation?: IDataItemFilters | string[];
    salesStatus?: IDataItemFilters | string[];
    apartmentClass?: IDataItemFilters | string[];
    floors?: IDataItemFilters | string[];
    appartmentState?: IDataItemFilters | string[];
}

export interface IDataItemFilters {
    label?: string;
    data?: string[];
}

export interface IContainerFiters {
    filters?: {
        isVisible?: boolean,
        data?: IDataFilters,
        selectFilters?: IDataFilters
    },
    price?: {
        isVisible?: boolean,
        fullPrice?: number,
        fullPriceM2?: number,
        selectPrice?: ISelectPrice,
        currency?: string[]
    },
    property?: {
        isVisible?: boolean,
        property?: ICompany[],
        selectProperty?: string[]
    },
    returnValueAll: (value: any) => void;
}