<template>
  <!-- levelsPage 包含两个卡片列表 -->
  <div id="levelsPage">
    <a-row :gutter="[16, 16]">
      <a-col :md="12" :xs="24">
        <!-- 主线关卡 -->
        <a-card title="主线关卡">
          <a-list item-layout="horizontal" :data-source="mainLevels">
            <template #renderItem="{ item: level, index }">
              <!-- 渲染每一个列表项 -->
              <a-list-item>
                <a-list-item-meta :title="`${index + 1}、${level.title}`" />
                <template #actions>
                  <!-- 跳转到挑战页面 -->
                  <router-link :to="`/learn/${level.key}`">
                    <a-button>挑战</a-button>
                  </router-link>
                </template>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
      <a-col :md="12" :xs="24">
        <!-- 自定义关卡 -->
        <a-card title="自定义关卡">
          <a-list item-layout="horizontal" :data-source="customLevels">
            <template #renderItem="{ item: level }">
              <!-- 渲染每一个列表项 -->
              <a-list-item>
                <a-list-item-meta :title="level.title" />
                <template #actions>
                  <!-- 跳转到挑战页面 -->
                  <router-link :to="`/learn/${level.key}`">
                    <a-button>挑战</a-button>
                  </router-link>
                </template>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
// 导入主线关卡和自定义关卡列表
import mainLevels from "../levels/mainLevels";
import customLevels from "../levels/customLevels";
</script>

<style scoped></style>
