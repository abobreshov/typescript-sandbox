let nums1: Array<number> = [2, 3, 6, 0, 0, 0];
let nums2: Array<number> = [1, 2, 3];
const m = 3,
  n = 3;

function merge(
  nums1: Array<number>,
  m: number,
  nums2: Array<number>,
  n: number,
): void {
  let i = m - 1,
    j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

merge(nums1, m, nums2, n);
console.log(nums1);
/*
  i = 2
  j = 2
  k = 5

  nums1[i] > nums2[j]
  nums1[k] = nums1[i]
  i = 1
  k = 4
  j = 2
  // [2, 3, 6, 0, 0, 6]

  ! nums1[2] > nums2[2]
  nums1[4] = nums2[2]
  j = 1
  k = 3
  i = 1
  // [2, 3, 6, 0, 3, 6]

  nums1[i] > nums2[j]
  nums1[k] = nums1[i]
  i = 0
  k = 2
  j = 1
  // [2, 3, 6, 3, 3, 6]

  ! nums1[i] > nums2[j]
  nums1[k] = nums2[j]
  j = 0
  k = 1
  i = 0
  // [2, 3, 2, 3, 3, 6]
  


  */

export { merge };
