const validate = (values) => {
    const errors = {};

    if (!values.Type) {
      errors.Type = 'Required';
    }
    if (!values.Currency) {
      errors.Currency = 'Required';
    }
    if (!values.TotalVM && values.TotalVM > 0) {
      errors.TotalVM = 'Required';
    }
    if (!values.productEdition) {
      errors.productEdition = 'Required';
    }
    if (!values.hostType) {
      errors.hostType = 'Required';
    }
    if (!values.storageType) {
      errors.storageType = 'Required';
    }
    if (!values.powerCost) {
      errors.powerCost = 'Required';
    }
    if (!values.spaceCost) {
      errors.spaceCost = 'Required';
    }
    if (!values.vmDensity) {
      errors.vmDensity = 'Required';
    }
    if (!values.densityAdvantage) {
      errors.densityAdvantage = 'Required';
    }
    if (!values.timeFrame) {
      errors.timeFrame = 'Required';
    }

    return errors;
  };

  export default validate; 