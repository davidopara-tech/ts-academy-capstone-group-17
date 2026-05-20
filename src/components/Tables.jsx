import "../Table.css"
function Tables() {
  return (
      <section className= "table-container">
  <h2> Planentory Facts at a Glance </h2>
  <p> Below is a comparative table of major planets in our solar system. The data 
      highlights key physical <br/> properties used by astronomers and researchers worldwide. </p>
  
<div className="table-wrapper">
  
  <table>
  <caption>
   <h4> Data about the planent of our solar system (planetory facts taken from nasa)</h4> 
  </caption>
  <thead className="color">
   <tr>
     <th scope="col" colSpan="2"></th>  
     <th scope="col">Name </th>
     <th scope="col">Mass(10 24kg) </th>
     <th scope="col">Diameter(km) </th>
     <th scope="col">Density (kg/m3) </th>
     <th scope="col">Gravity (m/ s2) </th>
   </tr>
   </thead>
  
  <tbody>
   <tr>
    <td rowSpan="4" colSpan="2" className="planet-type">Terissterial Planet</td>
    <td>Mercury</td>  
    <td>0.3330</td>
    <td>4.875</td>
    <td>5427</td>
    <td>3.7</td>
   </tr>

   <tr>
    <td>Venus</td>  
    <td>0.3330</td>
    <td>4.875</td>
    <td>5427</td>
    <td>3.7</td>
   </tr>

  <tr>
   <td>Earth</td>  
   <td>0.3330</td>
   <td>4.875</td>
   <td>5427</td>
   <td>3.7</td>
  </tr>

  <tr>
   <td>Mars</td>  
   <td>0.3330</td>
   <td>4.875</td>
   <td>5427</td>
   <td>3.7</td>
  </tr>

  <tr>
   <td rowSpan="4" className="planet-type">Jovian Planents</td>
   <td rowSpan="2" className="planet-type">Gas Giants</td>
   <td>Jupiter</td>  
   <td>0.3330</td>
   <td>4.875</td>
   <td>5427</td>
   <td>3.7</td>
  </tr>

   <tr>
   <td>Saturn</td>  
   <td>0.3330</td>
   <td>4.875</td>
   <td>5427</td>
   <td>3.7</td>
   </tr>

  <tr>
   <td rowSpan="2" className="planet-type">Ice Gaints</td>
   <td>Uranus</td>  
   <td>0.3330</td>
   <td>4.875</td>
   <td>5427</td>
   <td>3.7</td>
   </tr>

  <tr>
   <td>Neptune</td>
   <td>0.3330</td>
   <td>4.875</td>
   <td>5427</td>
   <td>3.7</td>
  </tr>

  <tr>
   <td colSpan="2" className="planet-type">Dwarf Planents</td>
   <td> Pluto</td>  
   <td>0.3330</td>
   <td>4.875</td>
   <td>5427</td>
   <td>3.7</td>
  </tr>
 
 </tbody> 
</table>
</div>

</section>
  

  )
}

export default Tables