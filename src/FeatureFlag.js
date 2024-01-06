const featureFlags = {
  FeatureFlagOn: true,
  FeatureFlagOff: false,
};
function isFeatureEnabled(feature) {
  return featureFlags[feature] === true;
}
export default isFeatureEnabled