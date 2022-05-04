import React from 'react'


export default function Dashboard() {
  return (
  <div>

    <h5>TCO COMPARISION CALCULATOR</h5>
    <h4>See how total cost of ownership is lower with VMware server virtualization and private cloud solutions compared to Microsoft. </h4>

      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1"><h3>1. Are you...</h3></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">2.Currency</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>USD</option>
      <option>INR</option>
      <option>PKR</option>

    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2"><h3>3. How many machines do you want to deploy?</h3></label>
    <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
  </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">4. Which VMVare Product would you like to compare with microsoft's solution?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>USD</option>
      <option>INR</option>
      <option>PKR</option>
      </select>
  </div>
  </form>
<h3>5.What Virtualization host type would you like to use?</h3>
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="SERVER A"/>
  <label class="form-check-label" for="inlineCheckbox1">SERVER A</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="SERVER B"/>
  <label class="form-check-label" for="inlineCheckbox2">SERVER B</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="SERVER C"/>
  <label class="form-check-label" for="inlineCheckbox3">SERVER C</label>
</div>
      <h3>6. What type of storage would you like to Employ?</h3>
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="SERVER A"/>
  <label class="form-check-label" for="inlineCheckbox1">SERVER A</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="SERVER B"/>
  <label class="form-check-label" for="inlineCheckbox2">SERVER B</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="SERVER C"/>
  <label class="form-check-label" for="inlineCheckbox3">SERVER C</label>
</div>
      <h3>7. Infrastructure costs:Electricity</h3>
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="LOW"/>
  <label class="form-check-label" for="inlineCheckbox1">LOW</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="MEDIUM"/>
  <label class="form-check-label" for="inlineCheckbox2">MEDIUM</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="HIGH"/>
  <label class="form-check-label" for="inlineCheckbox3">HIGH</label>
</div>
      <h3>8. How many machines do you want to deploy</h3>
      <label for="customRange2" class="form-label"></label>
<input type="range" class="form-range" min="0" max="100" id="customRange2"></input>

      <h3>9. Additonal Vmware VMs per CPU</h3>
      <label for="customRange3" class="form-label"></label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
</div>



  );
    } 