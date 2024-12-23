import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.kivansag.create({
        data:{
            kivano: "Kovács Patrik",
            tartalom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Lakatos János",
            tartalom: "Fusce consectetur vulputate auctor.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Csíkos Péter",
            tartalom: "Vivamus risus sapien, vestibulum vel nisl vel, ultricies placerat lacus.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Lukács Anna",
            tartalom: "Donec tempor blandit aliquam.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Nagy Kevin",
            tartalom: "Mauris ultricies, sem quis eleifend posuere, est metus dictum nisl, pellentesque posuere eros libero eget massa.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Kiss Beáta",
            tartalom: "Morbi id arcu iaculis, porttitor nisi sit amet, gravida tortor.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Közepes Lajos",
            tartalom: "Proin et neque non neque dapibus interdum a in mauris.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            tartalom: "Praesent fermentum egestas mi ut accumsan.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Gipsz Jakab",
            tartalom: "Praesent iaculis, diam vel euismod venenatis, justo diam efficitur dui, eget scelerisque leo magna quis leo.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Vass Elemér",
            tartalom: "Nullam dolor libero, tincidunt eget dignissim nec, imperdiet et libero.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            tartalom: "Vestibulum condimentum sed ligula sed faucibus.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Cicz Imre",
            tartalom: "Curabitur vitae ex et sapien suscipit maximus sit amet sit amet sapien.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Kovács Csanád",
            tartalom: "Aenean elit ex, sollicitudin ut augue a, finibus pellentesque neque.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            tartalom: "Maecenas rutrum, elit et bibendum condimentum, libero lorem bibendum ex, non facilisis est diam a dui.",
            
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Szoboszlay Fruzsina",
            tartalom: "auris eget euismod eros.",
            
        }
    })
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });