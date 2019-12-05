import React from 'react';
import { Menu } from './Menu'

const Menulist = () => {
    const shoppingitems = [
        { item: "Mexican Enchiladas", price: "€9, 40", id: 1 },
        { item: "Fajitas", price: "€9, 40", id: 2 },
        { item: "Royal Fajitas", price: "€9, 40", id: 3 },
        { item: "Chicken Enchilada Wrap", price: "€9, 40", id: 4 },
        { item: "Cheese Quesadilla ", price: "€9, 40", id: 5 },
        { item: "Chorizo & Cheese   ", price: "€9, 40", id: 6 },
        { item: "Beef Taco   ", price: "€9, 40", id: 8 },
        { item: "Minced Beef Double Layer  ", price: "€9, 40", id: 9 },
        { item: "Piri Piri Chicken   ", price: "€9, 40", id: 9 },
        { item: "Burrito Al Pastor   ", price: "€9, 40", id: 10 },
        { item: "Beef Enchilada Wrap  ", price: "€9, 40", id: 11 },
        { item: "Chicken Fillet Taco  ", price: "€9, 40", id: 12 },
        { item: "Tiger Prawn & Chorizo  ", price: "€9, 40", id: 13 },
        { item: "Fillet Steak & Chorizo  ", price: "€9, 40", id: 14 },
        { item: "Burrito's with Rice  ", price: "€9, 40", id: 15 },
        { item: "Mexican Burger  ", price: "€9, 40", id: 16 },
        { item: "Chocolate Fudge Cake  ", price: "€9, 40", id: 17 },
        { item: "Cheesecake  ", price: "€9, 40", id: 18 },
        { item: " Apple Pie & Custard  ", price: "€9, 40", id: 19 },
        { item: "Profiteroles  ", price: "€9, 40", id: 20 },
        { item: "Coke 0.33Le  ", price: "€9, 40", id: 21 },
        { item: "Energy drink 0.33L  ", price: "€9, 40", id: 22 },
        { item: "Pepsi  ", price: "€9, 40", id: 23 },
        { item: "Diet coke  ", price: "€9, 40", id: 24 },
    ]

    return (
        <div>
            {
                shoppingitems.map(shoppingitem => (
                    <Menu item={shoppingitem.item} price={shoppingitem.price} key={shoppingitem.id} />
           ))
        }
        </div>
    )
}

export default Menulist