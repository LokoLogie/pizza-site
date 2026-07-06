import { menuCategories } from '../data/menuData'

function PizzaCategory({ cat }) {
  return (
    <div className="menu-cat-body">

      {/* Mini availability note */}
      {cat.miniNote && (
        <p className="pizza-mini-note">⏰ {cat.miniNote}</p>
      )}

      {/* Special deal callout */}
      {cat.specialDeal && (
        <div className="pizza-special-deal">
          <span className="deal-badge">SPECIAL</span>
          <div className="deal-content">
            <span className="deal-name">{cat.specialDeal.label}</span>
            <span className="deal-price">{cat.specialDeal.price}</span>
          </div>
          <p className="deal-note">🚗 {cat.specialDeal.note}</p>
        </div>
      )}

      {/* Tiered pricing table */}
      <p className="pizza-section-title">Build Your Own Pizza</p>
      <div style={{ overflowX: 'auto' }}>
        <table className="pizza-size-table">
          <thead>
            <tr>
              <th>Toppings</th>
              {cat.sizes.map((s) => <th key={s}>{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {cat.toppingTiers.map((tier) => (
              <tr key={tier.label}>
                <td className="row-label">{tier.label}</td>
                {tier.prices.map((p, i) => <td key={i}>{p}</td>)}
              </tr>
            ))}
            <tr className="pizza-addon-row">
              <td className="row-label">Each Extra Topping</td>
              {cat.extraToppingPrices.map((p, i) => <td key={i}>{p}</td>)}
            </tr>
            <tr className="pizza-addon-row">
              <td className="row-label">Add Chicken or Shrimp</td>
              {cat.chickenShrimpAddon.map((p, i) => <td key={i}>{p}</td>)}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Toppings list */}
      <p className="pizza-section-title">Available Toppings</p>
      <div className="toppings-grid">
        {cat.toppings.map((t) => <span key={t} className="topping-tag">{t}</span>)}
      </div>

      {/* Specialty pizzas */}
      <p className="pizza-section-title">Specialty Pizzas</p>
      <div className="specialty-pizzas">
        {cat.specialties.map((pizza) => (
          <div key={pizza.name} className="specialty-pizza">
            <p className="specialty-pizza-name">{pizza.name}</p>
            {pizza.description && <p className="specialty-pizza-desc">{pizza.description}</p>}
            {pizza.flatPrice ? (
              <div className="specialty-pizza-prices">
                <span>{pizza.flatPrice}</span>
              </div>
            ) : (
              <div className="specialty-pizza-prices">
                {pizza.prices.map((price, i) =>
                  price ? (
                    <span key={i} title={cat.sizes[i]}>
                      {cat.sizes[i].split(' ')[0]}: {price}
                    </span>
                  ) : null
                )}
              </div>
            )}
            {pizza.extraNote && (
              <p className="specialty-pizza-desc" style={{ marginTop: '0.35rem' }}>
                {pizza.extraNote}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Wraps */}
      <p className="pizza-section-title">Wraps</p>
      <div className="menu-items" style={{ gridTemplateColumns: '1fr' }}>
        {cat.wraps.map((wrap) => (
          <div key={wrap.name} className="menu-item">
            <div className="menu-item-info">
              <p className="menu-item-name">{wrap.name}</p>
              {wrap.description && <p className="menu-item-desc">{wrap.description}</p>}
            </div>
            <span className="menu-item-price">{wrap.price}</span>
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
