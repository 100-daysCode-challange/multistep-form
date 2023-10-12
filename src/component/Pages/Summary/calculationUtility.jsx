export function calculatePlanTotal(selectedPlan, planYearlyBilling) {
  if (!selectedPlan) return 0;
  return planYearlyBilling
    ? selectedPlan.priceYearly
    : selectedPlan.priceMonthly;
}

export function calculateAddOnsTotal(addOnsSelected, planYearlyBilling) {
  return addOnsSelected
    .filter((addOn) => addOn.isSelected)
    .reduce((total, addOn) => {
      return (
        total + (planYearlyBilling ? addOn.priceYearly : addOn.priceMonthly)
      );
    }, 0);
}
