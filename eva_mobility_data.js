const EVA_MOBILITY_DATABASE = {
  "Phase 1": {
    "Days 1 & 3": {
      "Static Stretching": [
        { "text": "跪姿垫高胫骨前肌拉伸 (Kneeling Elevated Tibialis Stretch)", "duration": 90 },
        { "text": "跪姿背屈踝关节拉伸 (Kneeling Dorsiflexion Stretch)", "duration": 90 },
        { "text": "双向沙发拉伸 (2 Way Couch Stretch)", "duration": 60, "each_side": true },
        { "text": "半劈叉拉伸 (Half Split)", "duration": 60, "each_side": true }
      ],
      "Hip Mobility": [
        { "text": "深蹲侧步开胯 (Groiners)", "sets": 2, "reps": 5, "each_side": true },
        { "text": "直腿抬高 (Straight Leg Raise)", "sets": 2, "reps": 10, "each_side": true },
        { "text": "仰卧铁十字摆腿 (Iron Cross)", "sets": 2, "reps": 10, "each_side": true },
        { "text": "俯卧蝎子摆腿 (Scorpions)", "sets": 2, "reps": 10, "each_side": true }
      ]
    },
    "Days 2 & 4": {
      "Static Stretching": [
        { "text": "跪姿垫高胫骨前肌拉伸 (Kneeling Elevated Tibialis Stretch)", "duration": 90 },
        { "text": "跪姿背屈踝关节拉伸 (Kneeling Dorsiflexion Stretch)", "duration": 90 },
        { "text": "鸽子式拉伸 (Pigeon Stretch)", "duration": 60, "each_side": true },
        { "text": "蛙式拉伸 (Frog Stretch)", "duration": 90 }
      ],
      "Hip Mobility": [
        { "text": "滚地前伸 (Rollover Reach)", "sets": 2, "reps": 10 },
        { "text": "半跪姿腹股沟拉伸 (Half Kneeling Groin Stretch)", "sets": 2, "reps": 10, "each_side": true },
        { "text": "髋关节内旋/外旋 (Internal/External Rotations)", "sets": 2, "reps": 10 },
        { "text": "单腿蝎子鞭摆 (Single Leg Whip)", "sets": 2, "reps": 5, "each_side": true }
      ]
    }
  },
  "Phase 2": {
    "Days 1 & 3": {
      "Static Stretching": [
        { "text": "跟腱拉伸 (Achilles Stretch)", "duration": 60, "each_side": true },
        { "text": "沙发拉伸带手臂后展 (Couch Stretch with Reach)", "duration": 60, "each_side": true },
        { "text": "沙发拉伸带腘绳肌前伸 (Couch Stretch with Hamstring Reach)", "duration": 60, "each_side": true }
      ],
      "Hip Mobility": [
        { "text": "深蹲侧步开胯 (Groiners)", "sets": 1, "reps": 10, "each_side": true },
        { "text": "直腿抬高 (Straight Leg Raise)", "sets": 1, "reps": 10, "each_side": true },
        { "text": "仰卧铁十字摆腿 (Iron Cross)", "sets": 1, "reps": 10, "each_side": true },
        { "text": "俯卧蝎子摆腿 (Scorpions)", "sets": 1, "reps": 10, "each_side": true }
      ]
    },
    "Days 2 & 4": {
      "Static Stretching": [
        { "text": "跪姿垫高胫骨前肌拉伸 (Kneeling Elevated Tibialis Stretch)", "duration": 90 },
        { "text": "鸽子式拉伸带前伸 (Pigeon Stretch with Reach)", "duration": 60, "each_side": true },
        { "text": "半跪姿腹股沟拉伸 (Half Kneeling Groin Stretch)", "duration": 60, "each_side": true }
      ],
      "Hip Mobility": [
        { "text": "滚地前伸 (Rollover Reach)", "sets": 1, "reps": 10 },
        { "text": "横叉扫腿 (Mid Split Sweeps)", "sets": 1, "reps": 10, "each_side": true },
        { "text": "髋关节内旋/外旋 (Internal/External Rotations)", "sets": 1, "reps": 10, "each_side": true },
        { "text": "单腿臀桥带鞭摆 (Single Leg Glute Bridge with Whip)", "sets": 1, "reps": 5, "each_side": true }
      ]
    }
  },
  "Phase 3 & 4": {
    "Every Session": {
      "Dynamic Mobility": [
        { "text": "脚踝前后摇摆 (Ankle Rockers)", "sets": 1, "reps": 20, "each_side": true },
        { "text": "深蹲侧步带胸椎旋转 (Groiners with T Spine Reach)", "sets": 1, "reps": 10, "each_side": true },
        { "text": "髋关节内旋/外旋 (Internal/External Rotations)", "sets": 1, "reps": 20 },
        { "text": "仰卧铁十字摆腿 (Iron Cross)", "sets": 1, "reps": 10, "each_side": true },
        { "text": "俯卧蝎子摆腿 (Scorpions)", "sets": 1, "reps": 10, "each_side": true }
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EVA_MOBILITY_DATABASE;
}
