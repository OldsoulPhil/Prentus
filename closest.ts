export function closest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let closestSum = nums[0] + nums[1] + nums[n - 1];
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === target) {
        return target;
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
    }
  }
  return closestSum;
}

module.exports = { closest };
