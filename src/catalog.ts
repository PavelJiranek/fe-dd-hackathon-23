/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2023-10-19T08:18:42.185Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import {
    newAttribute,
    newMeasure,
    IAttribute,
    IMeasure,
    IMeasureDefinition,
    idRef,
} from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign channel id
 * Attribute ID: campaign_channel_id
 */
export const CampaignChannelId: IAttribute = newAttribute("campaign_channel_id");
/**
 * Attribute Title: Campaign Category
 * Attribute ID: campaign_channels.category
 */
export const CampaignCategory: IAttribute = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Campaign id
 * Attribute ID: campaign_id
 */
export const CampaignId: IAttribute = newAttribute("campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: campaign_name
 */
export const CampaignName: IAttribute = newAttribute("campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */
export const CustomerId: IAttribute = newAttribute("customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: customer_name
 */
export const CustomerName: IAttribute = newAttribute("customer_name");
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */
export const OrderId: IAttribute = newAttribute("order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_status");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */
export const ProductId: IAttribute = newAttribute("product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: product_name
 */
export const ProductName: IAttribute = newAttribute("product_name");
/**
 * Attribute Title: Product Category
 * Attribute ID: products.category
 */
export const ProductCategory: IAttribute = newAttribute("products.category");
/**
 * Attribute Title: Region
 * Attribute ID: region
 */
export const Region: IAttribute = newAttribute("region");
/**
 * Attribute Title: State
 * Attribute ID: store
 */
export const State = {
    /**
     * Display Form Title: Location
     * Display Form ID: geo__state__location
     */
    Location: newAttribute("geo__state__location"),
    /**
     * Display Form Title: State
     * Display Form ID: store
     */ Default: newAttribute("state"),
};
/**
 * Attribute Title: Type
 * Attribute ID: type
 */
export const Type: IAttribute = newAttribute("type");
/**
 * Metric Title: Campaign Spend
 * Metric ID: campaign_spend
 * Metric Type: MAQL Metric
 */
export const CampaignSpend: IMeasure<IMeasureDefinition> = newMeasure(idRef("campaign_spend", "measure"));
/**
 * Metric Title: # of Active Customers
 * Metric ID: of_active_customers
 * Metric Type: MAQL Metric
 */
export const NrOfActiveCustomers: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("of_active_customers", "measure"),
);
/**
 * Metric Title: # of Orders
 * Metric ID: of_orders
 * Metric Type: MAQL Metric
 */
export const NrOfOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("of_orders", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: order_amount
 * Metric Type: MAQL Metric
 */
export const OrderAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("order_amount", "measure"));
/**
 * Metric Title: Previous Quarter Revenue
 * Metric ID: previous_quarter_revenue
 * Metric Type: MAQL Metric
 */
export const PreviousQuarterRevenue: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("previous_quarter_revenue", "measure"),
);
/**
 * Metric Title: Revenue
 * Metric ID: revenue
 * Metric Type: MAQL Metric
 */
export const Revenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue", "measure"));
/**
 * Metric Title: % Revenue
 * Metric ID: revenue_2
 * Metric Type: MAQL Metric
 */
export const PercentRevenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_2", "measure"));
/**
 * Metric Title: Revenue (Clothing)
 * Metric ID: revenue_clothing
 * Metric Type: MAQL Metric
 */
export const RevenueClothing: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_clothing", "measure"));
/**
 * Metric Title: Revenue (Electronics)
 * Metric ID: revenue_electronics
 * Metric Type: MAQL Metric
 */
export const RevenueElectronics: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("revenue_electronics", "measure"),
);
/**
 * Metric Title: Revenue (Home)
 * Metric ID: revenue_home
 * Metric Type: MAQL Metric
 */
export const RevenueHome: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_home", "measure"));
/**
 * Metric Title: % Revenue in Category
 * Metric ID: revenue_in_category
 * Metric Type: MAQL Metric
 */
export const PercentRevenueInCategory: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("revenue_in_category", "measure"),
);
/**
 * Metric Title: Revenue (Outdoor)
 * Metric ID: revenue_outdoor
 * Metric Type: MAQL Metric
 */
export const RevenueOutdoor: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_outdoor", "measure"));
/**
 * Metric Title: Revenue per Customer
 * Metric ID: revenue_per_customer
 * Metric Type: MAQL Metric
 */
export const RevenuePerCustomer: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("revenue_per_customer", "measure"),
);
/**
 * Metric Title: Revenue per Dollar Spent
 * Metric ID: revenue_per_dollar_spent
 * Metric Type: MAQL Metric
 */
export const RevenuePerDollarSpent: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("revenue_per_dollar_spent", "measure"),
);
/**
 * Metric Title: Revenue / Top 10
 * Metric ID: revenue_top_10
 * Metric Type: MAQL Metric
 */
export const RevenueTop10: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue_top_10", "measure"));
/**
 * Metric Title: Statuses
 * Metric ID: statuses
 * Metric Type: MAQL Metric
 */
export const Statuses: IMeasure<IMeasureDefinition> = newMeasure(idRef("statuses", "measure"));
/**
 * Metric Title: Target Quarter Revenue
 * Metric ID: target_quarter_revenue
 * Metric Type: MAQL Metric
 */
export const TargetQuarterRevenue: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("target_quarter_revenue", "measure"),
);
/**
 * Metric Title: Total Revenue
 * Metric ID: total_revenue
 * Metric Type: MAQL Metric
 */
export const TotalRevenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_revenue", "measure"));
/**
 * Metric Title: Total Revenue (No Filters)
 * Metric ID: total_revenue_no_filters
 * Metric Type: MAQL Metric
 */
export const TotalRevenueNoFilters: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("total_revenue_no_filters", "measure"),
);
/**
 * Metric Title: Total Revenue This Quarter
 * Metric ID: total_revenue_this_quarter
 * Metric Type: MAQL Metric
 */
export const TotalRevenueThisQuarter: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("total_revenue_this_quarter", "measure"),
);
/**
 * Metric Title: X
 * Metric ID: x
 * Metric Type: MAQL Metric
 */
export const X: IMeasure<IMeasureDefinition> = newMeasure(idRef("x", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: budget
 */
export const Budget = {
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: price
 */
export const Price = {
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("price", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("price", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("price", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("price", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: quantity
 */
export const Quantity = {
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: spend
 */
export const Spend = {
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("runsum")),
};
/** Available Date Data Sets */
export const DateDatasets = {
    /**
     * Date Data Set Title: Date
     * Date Data Set ID: date
     */
    Date: {
        ref: idRef("date", "dataSet"),
        identifier: "date",
        /**
         * Date Attribute: Date - Date
         * Date Attribute ID: date.day
         */ DateDate: {
            ref: idRef("date.day", "attribute"),
            identifier: "date.day",
            /**
             * Display Form Title: Date - Date
             * Display Form ID: date.day
             */ Default: newAttribute("date.day"),
        },
        /**
         * Date Attribute: Date - Day of Month
         * Date Attribute ID: date.dayOfMonth
         */ DateDayOfMonth: {
            ref: idRef("date.dayOfMonth", "attribute"),
            identifier: "date.dayOfMonth",
            /**
             * Display Form Title: Date - Day of Month
             * Display Form ID: date.dayOfMonth
             */ Default: newAttribute("date.dayOfMonth"),
        },
        /**
         * Date Attribute: Date - Day of Week
         * Date Attribute ID: date.dayOfWeek
         */ DateDayOfWeek: {
            ref: idRef("date.dayOfWeek", "attribute"),
            identifier: "date.dayOfWeek",
            /**
             * Display Form Title: Date - Day of Week
             * Display Form ID: date.dayOfWeek
             */ Default: newAttribute("date.dayOfWeek"),
        },
        /**
         * Date Attribute: Date - Day of Year
         * Date Attribute ID: date.dayOfYear
         */ DateDayOfYear: {
            ref: idRef("date.dayOfYear", "attribute"),
            identifier: "date.dayOfYear",
            /**
             * Display Form Title: Date - Day of Year
             * Display Form ID: date.dayOfYear
             */ Default: newAttribute("date.dayOfYear"),
        },
        /**
         * Date Attribute: Date - Hour
         * Date Attribute ID: date.hour
         */ DateHour: {
            ref: idRef("date.hour", "attribute"),
            identifier: "date.hour",
            /**
             * Display Form Title: Date - Hour
             * Display Form ID: date.hour
             */ Default: newAttribute("date.hour"),
        },
        /**
         * Date Attribute: Date - Hour of Day
         * Date Attribute ID: date.hourOfDay
         */ DateHourOfDay: {
            ref: idRef("date.hourOfDay", "attribute"),
            identifier: "date.hourOfDay",
            /**
             * Display Form Title: Date - Hour of Day
             * Display Form ID: date.hourOfDay
             */ Default: newAttribute("date.hourOfDay"),
        },
        /**
         * Date Attribute: Date - Minute
         * Date Attribute ID: date.minute
         */ DateMinute: {
            ref: idRef("date.minute", "attribute"),
            identifier: "date.minute",
            /**
             * Display Form Title: Date - Minute
             * Display Form ID: date.minute
             */ Default: newAttribute("date.minute"),
        },
        /**
         * Date Attribute: Date - Minute of Hour
         * Date Attribute ID: date.minuteOfHour
         */ DateMinuteOfHour: {
            ref: idRef("date.minuteOfHour", "attribute"),
            identifier: "date.minuteOfHour",
            /**
             * Display Form Title: Date - Minute of Hour
             * Display Form ID: date.minuteOfHour
             */ Default: newAttribute("date.minuteOfHour"),
        },
        /**
         * Date Attribute: Date - Month/Year
         * Date Attribute ID: date.month
         */ DateMonthYear: {
            ref: idRef("date.month", "attribute"),
            identifier: "date.month",
            /**
             * Display Form Title: Date - Month/Year
             * Display Form ID: date.month
             */ Default: newAttribute("date.month"),
        },
        /**
         * Date Attribute: Date - Month of Year
         * Date Attribute ID: date.monthOfYear
         */ DateMonthOfYear: {
            ref: idRef("date.monthOfYear", "attribute"),
            identifier: "date.monthOfYear",
            /**
             * Display Form Title: Date - Month of Year
             * Display Form ID: date.monthOfYear
             */ Default: newAttribute("date.monthOfYear"),
        },
        /**
         * Date Attribute: Date - Quarter/Year
         * Date Attribute ID: date.quarter
         */ DateQuarterYear: {
            ref: idRef("date.quarter", "attribute"),
            identifier: "date.quarter",
            /**
             * Display Form Title: Date - Quarter/Year
             * Display Form ID: date.quarter
             */ Default: newAttribute("date.quarter"),
        },
        /**
         * Date Attribute: Date - Quarter of Year
         * Date Attribute ID: date.quarterOfYear
         */ DateQuarterOfYear: {
            ref: idRef("date.quarterOfYear", "attribute"),
            identifier: "date.quarterOfYear",
            /**
             * Display Form Title: Date - Quarter of Year
             * Display Form ID: date.quarterOfYear
             */ Default: newAttribute("date.quarterOfYear"),
        },
        /**
         * Date Attribute: Date - Week/Year
         * Date Attribute ID: date.week
         */ DateWeekYear: {
            ref: idRef("date.week", "attribute"),
            identifier: "date.week",
            /**
             * Display Form Title: Date - Week/Year
             * Display Form ID: date.week
             */ Default: newAttribute("date.week"),
        },
        /**
         * Date Attribute: Date - Week of Year
         * Date Attribute ID: date.weekOfYear
         */ DateWeekOfYear: {
            ref: idRef("date.weekOfYear", "attribute"),
            identifier: "date.weekOfYear",
            /**
             * Display Form Title: Date - Week of Year
             * Display Form ID: date.weekOfYear
             */ Default: newAttribute("date.weekOfYear"),
        },
        /**
         * Date Attribute: Date - Year
         * Date Attribute ID: date.year
         */ DateYear: {
            ref: idRef("date.year", "attribute"),
            identifier: "date.year",
            /**
             * Display Form Title: Date - Year
             * Display Form ID: date.year
             */ Default: newAttribute("date.year"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: All Products
     * Insight ID: 03374568-38f5-4d48-8a4b-a4abfd53cd17
     */
    AllProducts: "03374568-38f5-4d48-8a4b-a4abfd53cd17",
    /**
     * Insight Title: Customer Trend
     * Insight ID: 0880bed0-7a22-49d9-b978-8d2aa40c6a90
     */ CustomerTrend: "0880bed0-7a22-49d9-b978-8d2aa40c6a90",
    /**
     * Insight Title: Revenue per $ vs Budget by Campaign
     * Insight ID: 1145b468-e350-4cdc-b26f-8ca7d5d45856
     */ RevenuePer$VsBudgetByCampaign: "1145b468-e350-4cdc-b26f-8ca7d5d45856",
    /**
     * Insight Title: Revenue per Category Comparison
     * Insight ID: 15ffeb5d-cf83-40f6-9cad-b2ebf3238402
     */ RevenuePerCategoryComparison: "15ffeb5d-cf83-40f6-9cad-b2ebf3238402",
    /**
     * Insight Title: Outdoor
     * Insight ID: 18d82386-68cc-4396-b257-bc5f000d9fa3
     */ Outdoor: "18d82386-68cc-4396-b257-bc5f000d9fa3",
    /**
     * Insight Title: Campains
     * Insight ID: 258ed581-2690-446f-862e-8b978775c228
     */ Campains: "258ed581-2690-446f-862e-8b978775c228",
    /**
     * Insight Title: AAA
     * Insight ID: 294bee42-f97f-4297-922f-e520798b9afa
     */ AAA: "294bee42-f97f-4297-922f-e520798b9afa",
    /**
     * Insight Title: Total Quarter Revenue to Target
     * Insight ID: 2c15fefd-099e-4f3e-b880-e896ae226ea3
     */ TotalQuarterRevenueToTarget: "2c15fefd-099e-4f3e-b880-e896ae226ea3",
    /**
     * Insight Title: Total Spend to Budget Chart
     * Insight ID: 2e7e6787-f15b-46eb-a270-c79315a23dc9
     */ TotalSpendToBudgetChart: "2e7e6787-f15b-46eb-a270-c79315a23dc9",
    /**
     * Insight Title: X
     * Insight ID: 301fb112-6f11-459b-93bc-00e01c7ce53d
     */ X_1: "301fb112-6f11-459b-93bc-00e01c7ce53d",
    /**
     * Insight Title: X
     * Insight ID: 46aca882-5b4f-4a49-bbe1-b7f2eadd6d87
     */ X_2: "46aca882-5b4f-4a49-bbe1-b7f2eadd6d87",
    /**
     * Insight Title: Demo
     * Insight ID: 4a506250-d884-4e26-9b6b-8e1b8fd9ffae
     */ Demo: "4a506250-d884-4e26-9b6b-8e1b8fd9ffae",
    /**
     * Insight Title: Revenue Trend (Daily)
     * Insight ID: 4df61848-d839-41a8-b005-56495b684f4e
     */ RevenueTrendDaily: "4df61848-d839-41a8-b005-56495b684f4e",
    /**
     * Insight Title: NewInsight
     * Insight ID: 4f405efd-51e8-4d50-b93a-c83a5c09c390
     */ NewInsight: "4f405efd-51e8-4d50-b93a-c83a5c09c390",
    /**
     * Insight Title: X
     * Insight ID: 51fd16d7-9689-4cb8-a67f-db9ded933d14
     */ X_3: "51fd16d7-9689-4cb8-a67f-db9ded933d14",
    /**
     * Insight Title: Avg Revenue per Customer
     * Insight ID: 60c42543-2d19-4298-a0c7-23953d8e801f
     */ AvgRevenuePerCustomer: "60c42543-2d19-4298-a0c7-23953d8e801f",
    /**
     * Insight Title: Top 10 Products
     * Insight ID: 66668a0f-f8b0-42c1-a6ea-f4294c08e028
     */ Top10Products: "66668a0f-f8b0-42c1-a6ea-f4294c08e028",
    /**
     * Insight Title: Revenue Trend
     * Insight ID: 66f5a75f-9199-41b1-beb6-843d5ad0a4d1
     */ RevenueTrend: "66f5a75f-9199-41b1-beb6-843d5ad0a4d1",
    /**
     * Insight Title: Electronics
     * Insight ID: 747da166-41c6-4947-b93e-82de9246932f
     */ Electronics: "747da166-41c6-4947-b93e-82de9246932f",
    /**
     * Insight Title: XXXX
     * Insight ID: 749d684a-4d98-43d9-9e43-b05e1f4840a8
     */ XXXX: "749d684a-4d98-43d9-9e43-b05e1f4840a8",
    /**
     * Insight Title: Top 10 Customers
     * Insight ID: 7c021378-e979-4997-b36d-e10f451123b1
     */ Top10Customers: "7c021378-e979-4997-b36d-e10f451123b1",
    /**
     * Insight Title: Campaign Revenue Detail Breakdown
     * Insight ID: 818a6af8-659c-4bf4-a08d-bffcf7980d1e
     */ CampaignRevenueDetailBreakdown: "818a6af8-659c-4bf4-a08d-bffcf7980d1e",
    /**
     * Insight Title: Returning Customers
     * Insight ID: 8a3508de-fb8b-4db7-afeb-e2384d4b59d4
     */ ReturningCustomers: "8a3508de-fb8b-4db7-afeb-e2384d4b59d4",
    /**
     * Insight Title: Product Breakdown
     * Insight ID: 8ad75e4b-64a1-40b3-b9ab-36669636d6b6
     */ ProductBreakdown: "8ad75e4b-64a1-40b3-b9ab-36669636d6b6",
    /**
     * Insight Title: Total Revenue
     * Insight ID: a6c68d20-bc61-4989-ac70-6709dd4e5a46
     */ TotalRevenue_1: "a6c68d20-bc61-4989-ac70-6709dd4e5a46",
    /**
     * Insight Title: % Revenue per Product by Customer and Category
     * Insight ID: a8bfecdb-370c-447a-b4d9-e466fbccb9a5
     */ PercentRevenuePerProductByCustomerAndCategory: "a8bfecdb-370c-447a-b4d9-e466fbccb9a5",
    /**
     * Insight Title: Product Categories Pie Chart
     * Insight ID: ac3b59fa-2573-42c6-8470-19d2eebf7176
     */ ProductCategoriesPieChart: "ac3b59fa-2573-42c6-8470-19d2eebf7176",
    /**
     * Insight Title: Categories
     * Insight ID: b916e7b8-e945-4f39-9258-694d975ad35d
     */ Categories: "b916e7b8-e945-4f39-9258-694d975ad35d",
    /**
     * Insight Title: Revenue vs Orders
     * Insight ID: b92505fc-a099-4901-a699-d49a89c511fa
     */ RevenueVsOrders: "b92505fc-a099-4901-a699-d49a89c511fa",
    /**
     * Insight Title: Campaign Spend
     * Insight ID: c84fce5d-11cb-493a-a379-f9c0173171fa
     */ CampaignSpend_1: "c84fce5d-11cb-493a-a379-f9c0173171fa",
    /**
     * Insight Title: Home
     * Insight ID: ca118c0b-7f26-4497-a61e-156526034911
     */ Home: "ca118c0b-7f26-4497-a61e-156526034911",
    /**
     * Insight Title: Product Category Over Time
     * Insight ID: ce7dd74c-9432-43b8-a8ba-d7a002fedfb1
     */ ProductCategoryOverTime: "ce7dd74c-9432-43b8-a8ba-d7a002fedfb1",
    /**
     * Insight Title: # of Active Customers
     * Insight ID: d6a6523f-2b66-49a3-8b2b-9766cb5d6b49
     */ NrOfActiveCustomers_1: "d6a6523f-2b66-49a3-8b2b-9766cb5d6b49",
    /**
     * Insight Title: Clothing
     * Insight ID: e131375d-ed8e-41df-9489-c03306aeeb6e
     */ Clothing: "e131375d-ed8e-41df-9489-c03306aeeb6e",
    /**
     * Insight Title: Campaign Budget
     * Insight ID: e19081ae-4c4b-4ec1-b1af-e48ea5dd7a83
     */ CampaignBudget: "e19081ae-4c4b-4ec1-b1af-e48ea5dd7a83",
    /**
     * Insight Title: Revenue per $ vs Spend by Campign
     * Insight ID: ec3d3ae9-06d1-4ed2-a59d-c5a151121cc9
     */ RevenuePer$VsSpendByCampign: "ec3d3ae9-06d1-4ed2-a59d-c5a151121cc9",
    /**
     * Insight Title: Total Orders
     * Insight ID: f13786bf-e854-4ec5-adb9-bf686816b284
     */ TotalOrders: "f13786bf-e854-4ec5-adb9-bf686816b284",
};
export const Dashboards = {
    /**
     * Dashboard Title: 1. Overview
     * Dashboard ID: 3447e25a-83b5-4a35-a695-53a808a2dd32
     */
    _1Overview: "3447e25a-83b5-4a35-a695-53a808a2dd32",
    /**
     * Dashboard Title: 2. Product Details
     * Dashboard ID: 9a6e2449-922a-40f7-a3a9-68ec21164705
     */ _2ProductDetails: "9a6e2449-922a-40f7-a3a9-68ec21164705",
    /**
     * Dashboard Title: X
     * Dashboard ID: aea5ef93-3f95-40cf-a53d-3ece4e128f6c
     */ X_4: "aea5ef93-3f95-40cf-a53d-3ece4e128f6c",
    /**
     * Dashboard Title: 4. Campaign Details
     * Dashboard ID: e7d52773-56a1-4829-aa45-cc881229f305
     */ _4CampaignDetails: "e7d52773-56a1-4829-aa45-cc881229f305",
    /**
     * Dashboard Title: 3. Customer Details
     * Dashboard ID: ec85edab-a128-4927-b06e-e5b860397ab3
     */ _3CustomerDetails: "ec85edab-a128-4927-b06e-e5b860397ab3",
};
