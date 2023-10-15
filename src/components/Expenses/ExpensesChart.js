import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    console.log('Chart')
    const chartDataPoints =[
        {
            abbreviation: "Jan",
            name: "January",
            value: 0,
        },
        {
            abbreviation: "Feb",
            name: "February",
            value: 0,
        },
        {
            abbreviation: "Mar",
            name: "March",
            value: 0,
        },
        {
            abbreviation: "Apr",
            name: "April",
            value: 0,
        },
        {
            abbreviation: "May",
            name: "May",
            value: 0,
        },
        {
            abbreviation: "Jun",
            name: "June",
            value: 0,
        },
        {
            abbreviation: "Jul",
            name: "July",
            value: 0,
        },
        {
            abbreviation: "Aug",
            name: "August",
            value: 0,
        },
        {
            abbreviation: "Sep",
            name: "September",
            value: 0,
        },
        {
            abbreviation: "Oct",
            name: "October",
            value: 0,
        },
        {
            abbreviation: "Nov",
            name: "November",
            value: 0,
        },
        {
            abbreviation: "Dec",
            name: "December",
            value: 0,
        }
    ]
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints} />;

};

export default ExpensesChart;