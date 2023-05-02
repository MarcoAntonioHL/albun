import stiles from './contactos.module.css'
export default function Contactos(){
    return(
        <div className={stiles.caja}>
          <h3>Contactos</h3>
          <a href='https://wa.me/928751897' target='_blank' className={stiles.wa}>Whatsaap</a>
          
        </div>
    )
}
