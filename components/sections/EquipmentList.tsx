import { EQUIPMENT, imgUrl } from "@/lib/recipes";

export default function EquipmentList() {
  return (
    <section className="archive-body">
      <div className="equip-grid">
        {EQUIPMENT.map((e) => (
          <div key={e.id} className="equip-row">
            <div className="equip-media">
              <img src={imgUrl(e.img)} alt={e.name} />
            </div>
            <div>
              <span className="equip-num">{e.num} · Essential</span>
              <h3 className="equip-name">{e.name}.</h3>
              <p className="equip-note">{e.note}</p>
              <div className="equip-meta">
                <span>
                  <strong>{e.brand}</strong>
                </span>
                <span>{e.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
