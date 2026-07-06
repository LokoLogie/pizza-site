import { menuCategories } from '../data/menuData'

function PizzaCategory({ cat }) {
  return (
    <div className="menu-cat-body">
      <p className="pizza-section-title">Build Your Own Pizza — Cheese Pizza Prices</p>
      <table className="pizza-size-table">
        <thead>
          <tr>
            <th>Size</th>
            {cat.sizes.map((s) => (
              <th key={s}>{s}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="row-label">Cheese</td>
            {cat.cheesePrices.map((p) => (
              <td key={p}>{p}</td>
            ))}
          </tr>
          <tr>
            <td className="row-label">Each Topping</td>
            {cat.toppingPrices.map((p) => (
              <td key={p}>{p}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <p className="pizza-section-title">Available Toppings</p>
      <div className="toppings-grid">
        {cat.toppings.map((t) => (
          <span key={t} className="topping-tag">{t}</span>
        ))}
      </div>

      <p className="pizza-section-title">Specialty Pizzas</p>
      <div className="specialty-pizzas">
        {cat.specialties.map((pizza) => (
          <div key={pizza.name} className="specialty-pizza">
            <p className="specialty-pizza-name">{pizza.name}</p>
            <p className="specialty-pizza-desc">{pizza.description}</p>
            <div className="specialty-pizza-prices">
              {pizza.prices.map((price, i) => (
                <span key={i} title={cat.sizes[i]}>{cat.sizes[i].split(' ')[1] || cat.sizes[i]}: {price}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BeverageCategory({ cat }) {
  return (
    <div className="menu-cat-body">
      <div className="menu-items">
        {cat.items.map((item) => (
          <div key={item.name} className="menu-item">
            <div className="menu-item-info">
              <p className="menu-item-name">{item.name}</p>
              {item.description && (
                <p className="menu-item-desc">{item.description}</p>
              )}
            </div>
            <span className="menu-item-price">{item.price}</span>
          </div>
        ))}
      </div>

      {cat.wines && (
        <>
          <p className="pizza-section-title" style={{ marginTop: '1.5rem' }}>Wine Selection</p>
          <div className="wine-grid">
            {cat.wines.map((wine) => (
              <div key={wine.name} className="wine-item">
                <div className="wine-item-info">
                  <p className="wine-name">{wine.name}</p>
                  <p className="wine-desc">{wine.description}</p>
                </div>
                <div className="wine-prices">
                  <div className="glass">Glass {wine.glass}</div>
                  <div className="bottle">Btl {wine.bottle}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function StandardCategory({ cat }) {
  return (
    <div className="menu-cat-body">
      {cat.note && <p className="menu-cat-note">✦ {cat.note}</p>}
      <div className="menu-items">
        {cat.items.map((item) => (
          <div key={item.name} className="menu-item">
            <div className="menu-item-info">
              <p className="menu-item-name">{item.name}</p>
              {item.description && (
                <p className="menu-item-desc">{item.description}</p>
              )}
            </div>
            <span className="menu-item-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="section section--cream">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Crafted with love, served with pride</p>
          <div className="ornament">
            <span>✦ &nbsp; La Cucina Italiana &nbsp; ✦</span>
          </div>
          <p style={{ textAlign: 'center', fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            *Prices subject to change without notice. Dine-in, carry-out &amp; delivery available.
          </p>
        </div>

        <div className="menu-categories">
          {menuCategories.map((cat) => (
            <details key={cat.id} className="menu-category" id={`menu-${cat.id}`}>
              <summary>
                <span className="menu-cat-icon" aria-hidden="true">{cat.icon}</span>
                <span className="menu-cat-name">{cat.name}</span>
                <span className="menu-cat-arrow" aria-hidden="true">▼</span>
              </summary>

              {cat.isPizza ? (
                <PizzaCategory cat={cat} />
              ) : cat.id === 'beverages' ? (
                <BeverageCategory cat={cat} />
              ) : (
                <StandardCategory cat={cat} />
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
